import gql from '@apollo/client';

export const queries = {
  COLUMN_ID: () => gql`
    id
  `,
  COLUMN_NOME: () => gql`
    nome
  `,
  COLUMN_SITUACAO: () => gql`
    situacao
  `,
  COLUMN_LICEN_SITU: () => gql`
    licen_situ
  `,
  COLUMN_VAZAO_MAX: () => gql`
    vaz_max
  `,
  COLUMN_VAZAO_OUTORGA: () => gql`
    vaz_outorg
  `,
  COLUMN_HORAS_OUTORGA: () => gql`
    horas_outorg
  `,
  COLUMN_OBS: () => gql`
    obs
  `,
  COLUMN_NUM_PATRIMONIO: () => gql`
    num_patrimonio
  `,
  COLUMN_DATA_ENTREGA: () => gql`
    data_entrega
  `,
  COLUMN_USR_MODIF: () => gql`
    users{
        id
        nome
    }
  `,
  COLUMN_LAST_MODIF: () => gql`
    last_modif
  `,
  COLUMN_FILES_JSON: () => gql`
    files
  `,
};

export const mutations = {};
