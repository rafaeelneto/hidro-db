export const queries = {
  GET_ALL: (filters, orderBy, fields) => `
    query GET_MUNICIPIOS ($limit: Int!, $offset: Int!){
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
  COLUMN_SEDE_SETOR: () => `
  sede_setores {
    id
    nome
  }
  `,
};

export const mutations = {};
