export const queries = {
  GET_ALL: (filters, orderBy, fields) => `
    query GET_POCOS ($limit: Int!, $offset: Int!){
        pocos (${filters} ${orderBy} limit: $limit, offset: $offset){
          id
          ${fields}
        }
    }
    `,
  GET_BY_ID: (fields) => `
    query GET_POCO_BY_ID($id: bigint!) {
      pocos_by_pk(id: $id) {
        ${fields}
      }
    }
  `,
  COUNT_POCOS: () => `
    query {
      pocos_aggregate {
        aggregate {
          count
        }
      }
    }
  `,
  COLUMN_PROFUNDIDADE: () => `
    profun
  `,
  COLUMN_DATA_PERF: () => `
    data_perf
  `,
  COLUMN_PONTEIRA: () => `
    ponteira
  `,
  COLUMN_PERFIL_CONST: () => `
    perfil_const
  `,
  COLUMN_PERFIL_GEO: () => `
    perfil_geol
  `,
};

export const mutations = {};
