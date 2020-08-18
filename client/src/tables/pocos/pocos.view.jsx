import React, { useState } from 'react';
import { Route, Switch as RouteSwitch, useRouteMatch } from 'react-router-dom';
import { Button, useTheme, makeStyles, Tooltip } from '@material-ui/core/';
import { useQuery, gql } from '@apollo/client';

//TABLE IMPORT TO DISPLAY
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import PocosItem from './pocos.item';

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

const fieldsPocos = [
  {
    nome: 'Nome do poço',
    main: true,
    present: true,
    getValue: (item) => (item.municipio ? item.municipio.nome : '-'),
  },
];

const fields = [
  'setor_id',
  'un_id',
  'municipio_id',
  'profun',
  'situacao',
  'licen_situ',
  'data_perf',
  'revest',
  'vaz_max',
  'horas_outorg',
  'num_patrimonio',
  'vaz_outorg',
  'ponteira',
];

const stringSelect = `
  ${fields.map((item) => `$${item}: Boolean!,`)}
`;

const fieldsActives = {
  setor_id: false,
  un_id: false,
  municipio_id: false,
  profun: false,
  situacao: false,
  licen_situ: false,
  data_perf: false,
  revest: false,
  vaz_max: false,
  horas_outorg: false,
  num_patrimonio: false,
  vaz_outorg: false,
  ponteira: false,
};

const GET_POCOS = gql`
  query getPocos (
    ${stringSelect}
  ) {
    pocos(limit: 10, offset: 0) {
      id
      nome
      situacao 
      profun
      municipio {
        nome
      }
      un {
        nome
      }
      sedes_setore {
        nome
      }
    }
  }
`;

const PocosView = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [anchorEl, setAnchorEl] = useState(null);

  console.log(GET_POCOS);

  const { data, loading, error } = useQuery(GET_POCOS);

  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error);
    return <h1>ERROR</h1>;
  }

  const { pocos } = data;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <h3>Poços</h3>
      <div>FILTROS...</div>

      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
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
                <TableCell>Nome do poço</TableCell>
                <TableCell align="right">Situação</TableCell>
                <TableCell align="right">Profundidade (m)</TableCell>
                <TableCell align="right">Setor</TableCell>
                <TableCell align="right">Município</TableCell>
                <TableCell align="right">Unid. Negócios</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pocos.map((poco) => (
                <TableRow key={poco.id}>
                  <TableCell component="th" scope="row">
                    {poco.nome}
                  </TableCell>
                  <TableCell align="right">{poco.situacao}</TableCell>
                  <TableCell align="right">{poco.profun}</TableCell>
                  <TableCell align="right">
                    {poco.sedes_setore ? poco.sedes_setore.nome : '-'}
                  </TableCell>
                  <TableCell align="right">
                    {poco.municipio ? poco.municipio.nome : '-'}
                  </TableCell>
                  <TableCell align="right">
                    {poco.un ? poco.un.nome : '-'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

let COUNTER_REQUEST = 0;

export default () => {
  const { path } = useRouteMatch();

  COUNTER_REQUEST++;

  console.log('pocos view page', path);
  console.log(COUNTER_REQUEST);

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
