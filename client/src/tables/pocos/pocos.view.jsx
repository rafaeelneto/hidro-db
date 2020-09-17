import React, { useState } from 'react';
import { Route, Switch as RouteSwitch, useRouteMatch } from 'react-router-dom';
import {
  Button,
  useTheme,
  makeStyles,
  Collapse,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core/';
import { useQuery, gql } from '@apollo/client';

//TABLE IMPORT TO DISPLAY
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { format } from 'date-fns';

import PocosItem from './pocos.item';
import Field from '../Field';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    tableWrapper: {
      height: '60vh',
    },
    tableContainer: {
      height: '100%',
      overflowY: 'scroll',
    },
  };
});

//DECLARE FIELDS TO FILTER AND SHOW ON TABLE
const fields = [
  new Field('Nome do poço', 'nome', true, true, true, (item) =>
    item.nome ? item.nome : '-'
  ),
  new Field('Situação', 'situacao', false, true, true, (item) =>
    item.situacao ? item.situacao : '-'
  ),
  new Field('Setor', 'sede_setores', false, true, true, (item) =>
    item.sede_setores ? item.sede_setores.nome : '-'
  ),
  new Field('Unid. Negócios', 'un', false, true, true, (item) =>
    item.un ? item.un.nome : '-'
  ),
  new Field('Município', 'municipio', false, true, true, (item) =>
    item.municipio ? item.municipio.nome : '-'
  ),
  new Field('Profundidade (m)', 'profun', false, true, true, (item) =>
    item.profun ? item.profun : '-'
  ),
  new Field(
    'Licenciamento',
    'licen_situ',
    false,
    false,
    true,
    (item, enum_licen) => (item.licen_situ ? enum_licen[item.licen_situ] : '-')
  ),
  new Field('Data de Perfuração', 'data_perf', false, false, true, (item) =>
    item.data_perf ? format(new Date(item.data_perf), 'dd/MM/yyyy') : '-'
  ),
  new Field('Vazão Máx.', 'vaz_max', false, false, true, (item) =>
    item.vaz_max ? item.vaz_max : '-'
  ),
  new Field('Vazão Outorgada', 'vaz_outorg', false, false, true, (item) =>
    item.vaz_outorg ? item.vaz_outorg : '-'
  ),
  new Field('Horas Outorgada', 'horas_outorg', false, false, true, (item) =>
    item.horas_outorg ? item.horas_outorg : '-'
  ),
  new Field('N° patrimônio', 'num_patrimonio', false, false, true, (item) =>
    item.num_patrimonio ? item.num_patrimonio : '-'
  ),
  new Field('Ponteira', 'ponteira', false, false, true, (item) =>
    item.ponteira ? item.ponteira : '-'
  ),
];

const graphQLSelectVariables = Field.getGraphQlVariable(fields);

const GET_POCOS_2 = gql`
  query getPocos (
    ${graphQLSelectVariables}
    $limit: Int!,
    $offset: Int!,
  ) {
    pocos (limit: $limit, offset: $offset) {
      id
      nome
      situacao @include (if: $situacao)
      profun @include (if: $profun)
      licen_situ @include (if: $licen_situ)
      data_perf @include (if: $data_perf)
      vaz_max @include (if: $vaz_max)
      vaz_outorg @include (if: $vaz_outorg)
      horas_outorg @include (if: $horas_outorg)
      num_patrimonio @include (if: $num_patrimonio)
      ponteira @include (if: $ponteira)
      municipio @include (if: $municipio) {
        nome
      }
      un @include (if: $un) {
        nome
      }
      sede_setores @include (if: $sede_setores) {
        nome
      }
    }
    enum_licen_situ{
      nome
      label
    }
  }
`;

const PocosView = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [fieldsState, setFieldsState] = useState(fields);
  const [tableSelectorHidden, setTableSelectorHidden] = useState(false);

  //SET FILTER COMPONENT AND
  //SET TABLES TO SHOW

  //QUERY INFORMATION
  const { data, loading, error } = useQuery(GET_POCOS_2, {
    variables: {
      ...Field.getVariableActive(fieldsState),
      limit: 50,
      offset: 0,
    },
  });

  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error);
    return <h1>ERROR</h1>;
  }

  console.log('RENDER');

  const { pocos, enum_licen_situ } = data;
  const enum_licen = Field.normalizerEnum(enum_licen_situ);

  const handleChange = (index) => {
    let tmpFields = [...fieldsState];
    let tmpField = fieldsState[index];
    tmpField = {
      ...tmpField,
      present: !tmpField.present,
    };
    tmpFields[index] = tmpField;
    setFieldsState(tmpFields);
  };

  //SET GUIDES TO MAPS AND TABLES COMPONENTS

  return (
    <div className={classes.root}>
      <h3>Poços</h3>
      <div>FILTROS...</div>

      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {
            setTableSelectorHidden(!tableSelectorHidden);
          }}
        >
          Colunas
        </Button>
        <Collapse in={tableSelectorHidden}>
          <FormGroup row>
            {fieldsState.map((field, index) => {
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={field.present}
                      onChange={() => handleChange(index)}
                      name="checkedA"
                    />
                  }
                  label={field.label}
                />
              );
            })}
          </FormGroup>
        </Collapse>
      </div>

      <div className={classes.tableWrapper}>
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Table
            stickyHeader
            className={classes.table}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                {fieldsState
                  .filter(
                    (item) => item.isMain || (item.onTable && item.present)
                  )
                  .map((field, index) => {
                    return (
                      <TableCell
                        key={index}
                        align={`${!field.isMain ? 'right' : ''}`}
                      >
                        {field.isMain ? (
                          <div style={{ width: '300px' }}>{field.label}</div>
                        ) : (
                          field.label
                        )}
                      </TableCell>
                    );
                  })}
              </TableRow>
            </TableHead>
            <TableBody>
              {pocos.map((poco) => (
                <TableRow key={poco.id}>
                  {fieldsState
                    .filter(
                      (item) => item.isMain || (item.onTable && item.present)
                    )
                    .map((field, index) => {
                      return (
                        <TableCell
                          key={index}
                          align={`${!field.isMain ? 'right' : ''}`}
                        >
                          {field.getValue(poco, enum_licen)}
                        </TableCell>
                      );
                    })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default () => {
  const { path } = useRouteMatch();

  return (
    <RouteSwitch>
      <Route exact path={path}>
        <PocosView />
      </Route>
      <Route path={`${path}/:id`}>
        <PocosItem />
      </Route>
    </RouteSwitch>
  );
};
