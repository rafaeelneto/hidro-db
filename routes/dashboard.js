const express = require("express");
const cors = require('cors');
const router = express.Router();
const users = require('../models/Users');
const tables = require('../models/Tables');
const db = require('../database/db');

resolve = require('path').resolve;

const sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        next()
    } else {
        res.redirect('/');
    }    
};

router.get('/apikeys', cors(), function (req, res, next) {
    res.json({
        mapbox: 'https://api.mapbox.com/styles/v1/rafaeel/cjz8tael002on1dqclsqt84ik/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFmYWVlbCIsImEiOiJjano4dDh1OHMwM2xtM2JwbG9jcWFmaXhzIn0.SihsXFXEW54INSxYcZ6_BQ',
    })
})

router.get('/', sessionChecker, (req, res) => {
    res.sendFile(resolve('./public/dashboard.html'));
});

router.get('/usr', (req, res) => {
    res.send(JSON.stringify({
        username: users.getUser(),
        valid: users.isValid()
    }));
});

router.get('/apis', sessionChecker, (req, res) => {
    res.send(JSON.stringify({
        mapbox: 'api',
        googleMaps: 'api'
    }));
});

router.get('/all', sessionChecker, async (req, res) => {
    try {
        const poços = await tables.getGIS(tables.tableNames.poços, 'poço_id, nome, situaçao, licenc_situ');
        const capSuperf = await tables.getGIS(tables.tableNames.cap_super, 'super_id, nome, situaçao,licenc_situ');
        const setoresSedes = await tables.getGIS(tables.tableNames.setores_sedes, 'setor_id, nome, alimentaçao');
        const uns = await tables.getTable(tables.tableNames.uns, 'un_id, nome');
        const regionais = await tables.getTable(tables.tableNames.regionais, 'region_id, nome');
        const municipios = await tables.getTable(tables.tableNames.municipios, 'municipio_id, nome');
        const outorgas = await tables.getTable(tables.tableNames.outorgas, 'outorga_id, num_outorga, validade, licen_id');
        
        const licenças = await tables.getTable(tables.tableNames.licenças, 'licen_id, num_licen');
        const autosInfraçao = await tables.getTable(tables.tableNames.autosInfra, 'autoifr_id, num_infra, situaçao_auto, licen_id, processo_id, notificaçao_id');
        const notificaçoes = await tables.getTable(tables.tableNames.notificaçoes, 'notif_id, num_notif, processo_id, licen_id');
        const analisesFQB = await tables.getTable(tables.tableNames.analises, 'analise_id, numafq, numab, potabilidade');
        const oficios = await tables.getTable(tables.tableNames.oficios, 'oficio_id, num_oficio, link_oficio');
        const orgaos = await tables.getTable(tables.tableNames.orgaos, 'orgao_id, nome');
        const situaçoes = await tables.getTable(tables.tableNames.situaçoes, 'situnot_id, situaçao');

        let processos;

        if(users.isValid()){
            processos = await tables.getTable(tables.tableNames.processos, 'processo_id, num_processo, obj_processo, descriçao, outorga_id, licen_id');
        }else{
            processos = await tables.getTableCondit(tables.tableNames.processos, 'processo_id, num_processo, obj_processo, descriçao, outorga_id, licen_id', `LOWER(situaçao) <> LOWER('arquivado') AND LOWER(situaçao) <> LOWER('indeferido')`);
        }

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
    } catch (error) {
        res.send(error);
    }
});

router.get('/info', sessionChecker, async (req, res) => {
    if(req.query.id){
        const info = await getInfo(req.query.type, req.query.id);
        res.json(info);
    }else{
        res.send('error');
    }
});

async function getInfo(type, id){
    let tableName;
    let columns;
    let joinsQueries;
    switch(type){
        case 'poço_id':
            tableName = tables.tableNames.poços;
            columns = tables.poçoInfoColumns;
            joinsQueries = [tables.outorgaPoçoJoinInfo, tables.processoPoçoJoinInfo, tables.vazoesPoçoJoin];
            break;
        case 'super_id':
            tableName = tables.tableNames.cap_super;
            columns = tables.superfInfoColumns;
            joinsQueries = [tables.outorgaSuperfJoinInfo, tables.processoSuperfJoinInfo, tables.vazoesSuperfJoin];
            break;
        case 'outorga_id':
            tableName = tables.tableNames.outorgas;
            columns = tables.outorgaInfoColumns;
            joinsQueries = [tables.superfOutorgaJoinInfo, tables.poçoOutorgaJoinInfo];
            break;
        case 'processo_id':
            tableName = tables.tableNames.processos;
            columns = tables.processoInfoColumns;
            joinsQueries = [tables.superfProcessoJoinInfo, tables.poçoProcessoJoinInfo];
            break;
        case 'notif_id':
            tableName = tables.tableNames.notificaçoes;
            columns = tables.notificaçaoInfoColumns;
            joinsQueries = [];
            break;
        case 'licen_id':
            tableName = tables.tableNames.licenças;
            columns = tables.licençaInfoColumns;
            joinsQueries = [];
            break;
        case 'autoifr_id':
            tableName = tables.tableNames.autosInfra;
            columns = tables.autoInfraçaoInfoColumns;
            joinsQueries = [];
            break;
        default:
            break;
    }

    let joinTables = [];

    for (let i = 0; i < joinsQueries.length; i++) {
        let result = await db.query(joinsQueries[i](type, id), []);

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