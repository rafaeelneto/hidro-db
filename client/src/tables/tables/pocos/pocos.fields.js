import React from 'react';

import { InputAdornment } from '@material-ui/core';

import TextFieldComponent from '../../../components/fields_components/textField.component';
import AutoCompleteList from '../../../components/fields_components/autoCompleteList.component';

import tableNames from '../../tableNames';
import columnNames from '../../columnsNames';
import { queries, mutations } from './pocos.graphql';

import {
  queries as queriesMunicipios,
  mutations as mutationsMunicipios,
} from '../municipios/municipios.graphql';

import {
  queries as queriesCommon,
  mutations as mutationsCommon,
} from '../commonColumns.graphql';
import Fields from '../../Fields';

const fields = new Map();

// =================================================
// NOME
// =================================================
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
    mutationsCommon.COLUMN_NOME, // mutation to set to the field
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

// =================================================
// PROFUNDIDADE
// =================================================
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
    mutations.COLUMN_PROFUNDIDADE, // mutation to set to the field
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

// =================================================
// MUNICIPIO
// =================================================
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
    mutationsMunicipios.COLUMN_MUNICIPIO, // mutation to set to the field
    (row) => (row.municipio && row.municipio.nome ? row.municipio.nome : '-'), // get value funcion
    function (row, tableName, featureId) {
      return (
        <AutoCompleteList
          value={row.municipio && row.municipio.id ? row.municipio.id : null}
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

export default fields;
