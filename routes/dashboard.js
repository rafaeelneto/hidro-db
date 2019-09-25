const express = require("express");
const router = express.Router();
const users = require('../models/Users');
const tables = require('../models/Tables');
const db = require('../database/db')

resolve = require('path').resolve;

function validate (req, res) {
    if (req.session.user && req.cookies.user_sid) {
        res.sendFile(resolve('./public/dashboard.html'));
    } else {
        res.redirect('/');
    }
}

router.get('/', (req, res) => {
    validate(req, res);
});

router.get('/usr', (req, res) => {
    res.send(JSON.stringify({
        username: users.getUser(),
        valid: users.isAuthorize
    }));
});

router.get('/all', async (req, res) => {
    const poços = await tables.getGIS(tables.tableNames.poços, 'poço_id, nome, situaçao, licenc_situ');
    const capSuperf = await tables.getGIS(tables.tableNames.cap_super, 'super_id, nome, situaçao,licenc_situ');
    const setoresSedes = await tables.getGIS(tables.tableNames.setores_sedes, 'setor_id, nome, alimentaçao');
    const uns = await tables.getTableGeneric(tables.tableNames.uns, 'un_id, nome');
    const regionais = await tables.getTableGeneric(tables.tableNames.regionais, 'region_id, nome');
    const municipios = await tables.getTableGeneric(tables.tableNames.municipios, 'municipio_id, nome');
    const outorgas = await tables.getTableGeneric(tables.tableNames.outorgas, 'outorga_id, num_outorga, validade');
    const processos = await tables.getTableGeneric(tables.tableNames.processos, 'processo_id, num_processo, situaçao');
    const licenças = await tables.getTableGeneric(tables.tableNames.licenças, 'licen_id, num_licen');
    const autosInfraçao = await tables.getTableGeneric(tables.tableNames.autosInfra, 'autoifr_id, num_infra, situaçao_auto');
    const notificaçoes = await tables.getTableGeneric(tables.tableNames.notificaçoes, 'notif_id, num_notif, situaçao_notif');
    const analisesFQB = await tables.getTableGeneric(tables.tableNames.analises, 'analise_id, numafq, numab, potabilidade');
    const oficios = await tables.getTableGeneric(tables.tableNames.oficios, 'oficio_id, num_oficio');
    const orgaos = await tables.getTableGeneric(tables.tableNames.orgaos, 'orgao_id, nome');
    const situaçoes = await tables.getTableGeneric(tables.tableNames.situaçoes, 'situnot_id, situaçao');
    const response = {
        poços: poços,
        capSuperf: capSuperf,
        uns: uns,
        regionais: regionais,
        setoresSedes: setoresSedes,
        municipios: municipios,
        outorgas: outorgas,
        licenças: licenças,
        processos: processos,
        autosInfraçao: autosInfraçao,
        notificaçoes: notificaçoes,
        analisesFQB: analisesFQB,
        oficios: oficios,
        orgaos: orgaos,
        situaçoes: situaçoes
    };
    res.json(response);
});

router.get('/info', async (req, res) => {
    if(req.query.id){
        const info = await getInf(req.query.type, req.query.id);
        res.json(info);
    }
    res.send('error');
});

async function getInf(type, id){
    let tableName;
    let columns;
    let joinsQueries;
    switch(type){
        case 'poço_id':
            tableName = 'poços';
            columns = tables.poçoInfoColumns;
            joinsQueries = [tables.outorgaPoçoJoinInfo, tables.processoPoçoJoinInfo, tables.vazoesPoçoJoin];
            break;
        case 'super_id':
            tableName = 'cap_super';
            columns = tables.superfInfoColumns;
            joinsQueries = [tables.outorgaSuperfJoinInfo, tables.processoSuperfJoinInfo, tables.vazoesSuperfJoin];
            break;
        case 'outorga_id':
            tableName = 'outorgas';
            columns = tables.outorgaInfoColumns;
            joinsQueries = [tables.outorgaSuperfJoinInfo, tables.outorgaPoçoJoinInfo];
            break;
        case 'processo_id':
            tableName = 'processos';
            columns = tables.processoInfoColumns;
            joinsQueries = [tables.processoPoçoJoinInfo, tables.processoSuperfJoinInfo];
            break;
        default:
            break;
    }

    let joinTables = [];

    for (let i = 0; i < joinsQueries.length; i++) {
        let result = await db.query(joinsQueries[i], [type, id]);
        joinTables.push(result.rows);
    }
    
    const result = await tables.getInfo(tableName, columns, '', `WHERE ${type} = ${id}`, []);

    return {
        type: type,
        table: result,
        joinTables: joinTables,
    };
}

module.exports = router;