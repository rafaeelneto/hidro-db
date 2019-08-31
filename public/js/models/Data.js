export const getKeyValues = (s) =>{
    let keys = [];
	let values = [];
	for(let i in s) {
        keys.push(i);
		values.push(s[i]);
    }
    return {
        keys: keys,
        values: values
    }
}

export const tablesKeys = {
    poços: 'poços',
    capSuperf: 'capSuperf',
    setoresSedes: 'setoresSedes',
    uns: 'uns',
    regionais: 'regionais',
    municipios: 'municipios',
    outorgas: 'outorgas',
    processos: 'processos',
    autosInfraçao: 'autosInfraçao',
    notificaçoes: 'notificaçoes',
    analisesFQB: 'analisesFQB',
    oficios: 'oficios',
    orgaos: 'orgaos',
    situaçoes: 'situaçoes'
}