import gql from '@apollo/client';

export const queries = {
  COLUMN_ID: () => `
    id
  `,
  COLUMN_NOME: () => `
    nome
  `,
  COLUMN_SITUACAO: () => `
    situacao
  `,
  COLUMN_LICEN_SITU: () => `
    licen_situ
  `,
  COLUMN_VAZAO_MAX: () => `
    vaz_max
  `,
  COLUMN_VAZAO_OUTORGA: () => `
    vaz_outorg
  `,
  COLUMN_HORAS_OUTORGA: () => `
    horas_outorg
  `,
  COLUMN_OBS: () => `
    obs
  `,
  COLUMN_NUM_PATRIMONIO: () => `
    num_patrimonio
  `,
  COLUMN_DATA_ENTREGA: () => `
    data_entrega
  `,
  COLUMN_USR_MODIF: () => `
    users{
        id
        nome
    }
  `,
  COLUMN_LAST_MODIF: () => `
    last_modif
  `,
  COLUMN_FILES_JSON: () => `
    files
  `,
};

export const mutations = {
  COLUMN_NOME: () => 'nome',
};
