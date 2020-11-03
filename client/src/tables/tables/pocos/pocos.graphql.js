import gql from '@apollo/client';

export const queries = {
  GET_ALL: (filters, orderBy, fields) => gql`
    query GET_POCOS ($limit: Int!, $offset: Int!){
        pocos (${filters} ${orderBy} limit: $limit, offset: $offset){
          id
          ${fields}
        }
    }
    `,
  GET_BY_ID: (fields) => gql`
    query GET_POCO_BY_ID($id: bigint!) {
      pocos_by_pk(id: $id) {
        ${fields}
      }
    }
  `,
  COUNT_POCOS: () => gql`
    query {
      pocos_aggregate {
        aggregate {
          count
        }
      }
    }
  `,
  COLUMN_PROFUNDIDADE: () => gql`
    profun
  `,
  COLUMN_SITUACAO: () => gql`
    situacao
  `,
  COLUMN_LICEN_SITU: () => gql`
    licen_situ
  `,
  COLUMN_DATA_PERF: () => gql`
    data_perf
  `,
  COLUMN_PONTEIRA: () => gql`
    ponteira
  `,
  COLUMN_PERFIL_CONST: () => gql`
    perfil_const
  `,
  COLUMN_PERFIL_GEO: () => gql`
    perfil_geol
  `,
};

export const mutations = {};
