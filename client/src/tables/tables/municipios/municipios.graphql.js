import gql from '@apollo/client';

export const queries = {
  GET_ALL: (filters, orderBy, fields) => gql`
    query GET_MUNICIPIOS ($limit: Int!, $offset: Int!){
        pocos (${filters} ${orderBy} limit: $limit, offset: $offset){
          id
          ${fields}
        }
    }
    `,
  GET_BY_ID: (fields) => gql`
    query GET_MUNICIPIO_BY_ID($id: bigint!) {
      pocos_by_pk(id: $id) {
        ${fields}
      }
    }
  `,
  COLUMN_MUNICIPIO: () => gql`
    municipio{
        id
        nome
    }
  `,
};

export const mutations = {};
