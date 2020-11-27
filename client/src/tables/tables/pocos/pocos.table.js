import { useQuery, gql } from '@apollo/client';

import TableModel from '../../Table.model';
import tableNames from '../../tableNames';
import fields from './pocos.fields';
import columnNames from '../../columnsNames';
import { queries, mutations } from './pocos.graphql';

const previewComponent = {};

const fieldsOrder = [
  { label: 'Geral', fields: [columnNames.profundidade, columnNames.municipio] },
];

const getGIS = () => null;

const statistics = {
  count: function useCount() {
    const { data, loading } = useQuery(gql`
      ${queries.COUNT_POCOS()}
    `);
    if (loading) return null;
    return data.pocos_aggregate ? data.pocos_aggregate.aggregate.count : 0;
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
