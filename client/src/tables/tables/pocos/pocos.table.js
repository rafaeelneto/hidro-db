import React from 'react';

import { InputAdornment } from '@material-ui/core';

import TextFieldComponent from '../../../components/fields_components/textField.component';
import AutoCompleteList from '../../../components/fields_components/autoCompleteList.component';

import TableModel from '../../Table.model';
import tableNames from '../../tableNames';
import columnNames from '../../columnsNames';
import { queries, mutations } from './pocos.graphql';
import { queries as queriesMunicipios } from '../municipios/municipios.graphql';
import { queries as queriesCommon } from '../commonColumns.graphql';
import Fields from '../../Fields';

const previewComponent = {};
const fields = new Map();
fields.set(
  columnNames.nome,
  new Fields(
    'Nome do Poço', // label
    columnNames.nome, // column name
    true, // is main table
    true, // on table
    false, // only on table
    false, // only on details page
    queriesCommon.COLUMN_NOME, // query of the field
    null, // mutation to set to the field
    (row) => (row.nome ? row.nome : '-'), // get value funcion
    function (row, tableName, featureId) {
      return (
        <TextFieldComponent
          value={this.getValue(row)}
          field={this}
          tableName={tableName}
          featureId={featureId}
        />
      );
    }, // component to be show on the details page
  ),
);
fields.set(
  columnNames.profundidade,
  new Fields(
    'Profundidade', // label
    columnNames.profundidade, // column name
    false, // is main table
    true, // on table
    false, // only on table
    false, // only on details page
    queries.COLUMN_PROFUNDIDADE, // query of the field
    null, // mutation to set to the field
    (row) => (row.profun ? `${row.profun} m` : '-'), // get value funcion
    function (row, tableName, featureId) {
      return (
        <TextFieldComponent
          endAdornment={<InputAdornment position="end">metros</InputAdornment>}
          type="number"
          value={row.profun ? row.profun : null}
          field={this}
          tableName={tableName}
          featureId={featureId}
        />
      );
    }, // component to be show on the details page
  ),
);
fields.set(
  columnNames.municipio,
  new Fields(
    'Município', // label
    columnNames.municipio, // column name
    false, // is main table
    true, // on table
    false, // only on table
    false, // only on details page
    queriesMunicipios.COLUMN_MUNICIPIO, // query of the field
    null, // mutation to set to the field
    (row) => (row.municipio.nome ? row.municipio.nome : '-'), // get value funcion
    // eslint-disable-next-line prefer-arrow-callback
    function (row, tableName, featureId) {
      return (
        <AutoCompleteList
          value={row.municipio.id ? row.municipio.id : null}
          graphQlQuery={{
            tableName: tableNames.municipios.name,
            query: queriesMunicipios.GET_ALL_OPTIONS(),
            getFunction: (item) => ({ value: item.id, label: item.nome }),
          }}
          field={this}
          tableName={tableName}
          featureId={featureId}
        />
      );
    }, // component to be show on the details page
  ),
);

const fieldsOrder = [[columnNames.profundidade, columnNames.municipio]];

const getGIS = () => null;

const statistics = {
  count: {
    query: '',
    getValue: (data) => {
      console.log(data);
    },
  },
};

export default () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new TableModel(
    tableNames.pocos,
    previewComponent,
    fields,
    fieldsOrder,
    getGIS,
    statistics,
    queries,
    mutations,
  );
