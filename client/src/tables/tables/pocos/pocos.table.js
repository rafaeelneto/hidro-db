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
    'Nome do Poço',
    'nome',
    true,
    true,
    false,
    true,
    queriesCommon.COLUMN_NOME,
    null,
    (data) => (data.pocos.nome ? data.pocos.nome : '-'),
    () => {
      console.log('COMPONENT FIELD');
    },
  ),
);
fields.set(
  'profun',
  new Fields(
    'Profundidade',
    'profun',
    false,
    true,
    false,
    false,
    queries.COLUMN_PROFUNDIDADE,
    null,
    (data) => (data.pocos.profun ? `${data.pocos.profun} m` : '-'),
    () => {
      console.log('COMPONENT FIELD');
    },
  ),
);
fields.set(
  'municipio',
  new Fields(
    'Municípios',
    'municipios',
    false,
    true,
    false,
    false,
    queriesMunicipios.COLUMN_MUNICIPIO,
    null,
    (data) => (data.pocos.municipios.nome ? data.pocos.municipios.nome : '-'),
    () => {
      console.log('COMPONENT FIELD');
    },
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
