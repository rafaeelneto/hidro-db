export const queries = {
  GET_ALL: (filters, orderBy, fields) => `
    query GET_POCOS ($limit: Int!, $offset: Int!){
        pocos (${filters} ${orderBy} limit: $limit, offset: $offset, order_by: { id: desc}){
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

export const mutations = {
  UPDATE: () => `
  mutation updatePocos ($id: bigint!, $changes: pocos_set_input!) {
    update_pocos_by_pk(
      pk_columns: {id: $id}
      _set: $changes
    ){
      id
    }
  }
  `,
  DELETE: () => `
  mutation deletePocos ($id: bigint!) {
    delete_pocos_by_pk(id: $id){
      id
    }
  }`,
  COLUMN_PROFUNDIDADE: () => 'profun',
};
