import TextFieldComponent from '../../components/fields_components/textField.component';

import Fields from '../Fields';

const fields = new Map();

fields.set(
  'nome',
  new Fields(
    'Nome do poço',
    'nome',
    true,
    true,
    true,
    (id) => 'Nome do poço', //getValue
    (id, newValue) => `${newValue} configurado`, //setValue
    (id, isEditMode, userAllowedConfig) => {
      return <TextFieldComponent />;
    } //component
  )
);

export default fields;

const fields1 = [
  new Field('Nome do poço', 'nome', true, true, true, (item) =>
    item.nome ? item.nome : '-'
  ),
  new Field('Situação', 'situacao', false, true, true, (item) =>
    item.situacao ? item.situacao : '-'
  ),
  new Field('Setor', 'sede_setores', false, true, true, (item) =>
    item.sede_setores ? item.sede_setores.nome : '-'
  ),
  new Field('Unid. Negócios', 'un', false, true, true, (item) =>
    item.un ? item.un.nome : '-'
  ),
  new Field('Município', 'municipio', false, true, true, (item) =>
    item.municipio ? item.municipio.nome : '-'
  ),
  new Field('Profundidade (m)', 'profun', false, true, true, (item) =>
    item.profun ? item.profun : '-'
  ),
  new Field(
    'Licenciamento',
    'licen_situ',
    false,
    false,
    true,
    (item, enum_licen) => (item.licen_situ ? enum_licen[item.licen_situ] : '-')
  ),
  new Field('Data de Perfuração', 'data_perf', false, false, true, (item) =>
    item.data_perf ? format(new Date(item.data_perf), 'dd/MM/yyyy') : '-'
  ),
  new Field('Vazão Máx.', 'vaz_max', false, false, true, (item) =>
    item.vaz_max ? item.vaz_max : '-'
  ),
  new Field('Vazão Outorgada', 'vaz_outorg', false, false, true, (item) =>
    item.vaz_outorg ? item.vaz_outorg : '-'
  ),
  new Field('Horas Outorgada', 'horas_outorg', false, false, true, (item) =>
    item.horas_outorg ? item.horas_outorg : '-'
  ),
  new Field('N° patrimônio', 'num_patrimonio', false, false, true, (item) =>
    item.num_patrimonio ? item.num_patrimonio : '-'
  ),
  new Field('Ponteira', 'ponteira', false, false, true, (item) =>
    item.ponteira ? item.ponteira : '-'
  ),
];
