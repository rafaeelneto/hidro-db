import TableModel from '../../Table.model';
import tableNames from '../../tableNames';
import { queries, mutations } from './pocos.graphql';
import { queries as queriesMunicipios } from '../municipios/municipios.graphql';
import { queries as queriesCommon } from '../commonColumns.graphql';
import Fields from '../../Fields';

const previewComponent = {};
const fields = new Map();
fields.set(
  'nome',
  new Fields(
    'Nome do Poço', // label
    'nome', // column name
    true, // is main table
    true, // on table
    false, // only on table
    false, // only on details page
    queriesCommon.COLUMN_NOME, // query of the field
    null, // mutation to set to the field
    (row) => (row.nome ? row.nome : '-'), // get value funcion
    () => {
      console.log('COMPONENT FIELD');
    }, // component to be show on the details page
  ),
);
fields.set(
  'profun',
  new Fields(
    'Profundidade', // label
    'profun', // column name
    false, // is main table
    true, // on table
    false, // only on table
    false, // only on details page
    queries.COLUMN_PROFUNDIDADE, // query of the field
    null, // mutation to set to the field
    (row) => (row.profun ? `${row.profun} m` : '-'), // get value funcion
    () => {
      console.log('COMPONENT FIELD');
    }, // component to be show on the details page
  ),
);
fields.set(
  'municipio',
  new Fields(
    'Município', // label
    'municipio', // column name
    false, // is main table
    true, // on table
    false, // only on table
    false, // only on details page
    queriesMunicipios.COLUMN_MUNICIPIO, // query of the field
    null, // mutation to set to the field
    (row) => (row.municipio.nome ? row.municipio.nome : '-'), // get value funcion
    () => {
      console.log('COMPONENT FIELD');
    }, // component to be show on the details page
  ),
);
fields.set(
  'situacao',
  new Fields(
    'Situação', // label
    'situacao', // column name
    false, // is main table
    true, // on table
    false, // only on table
    false, // only on details page
    queries.COLUMN_SITUACAO, // query of the field
    null, // mutation to set to the field
    (row) => (row.situacao ? row.situacao : '-'), // get value funcion
    () => {
      console.log('COMPONENT FIELD');
    }, // component to be show on the details page
  ),
);
fields.set(
  'licen_situ',
  new Fields(
    'Licenciamento', // label
    'licen_situ', // column name
    false, // is main table
    true, // on table
    false, // only on table
    false, // only on details page
    queries.COLUMN_SITUACAO, // query of the field
    null, // mutation to set to the field
    (row) => (row.licen_situ ? row.licen_situ : '-'), // get value funcion
    () => {
      console.log('COMPONENT FIELD');
    }, // component to be show on the details page
  ),
);

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
    getGIS,
    statistics,
    queries,
    mutations,
  );
