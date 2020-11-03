const enumLicenSitu = new Map();
enumLicenSitu.set('sem_outorga', 'Sem outorga');
enumLicenSitu.set('outorgado', 'Outorgado');
enumLicenSitu.set('em_processo', 'Em processo');

const enumFeaturesTypes = new Map();
enumFeaturesTypes.set('pocos', 'Poços');
enumFeaturesTypes.set('sedes_setores', 'Sede Setores');
enumFeaturesTypes.set('eeas', 'EEAs');
enumFeaturesTypes.set('etas', 'ETAs');
enumFeaturesTypes.set('reservatorios', 'Reservatórios');
enumFeaturesTypes.set('cap_superf', 'Cap. Superficial');

export default {
  enum_licen_situ: enumLicenSitu,
  enum_features_types: enumFeaturesTypes,
};
