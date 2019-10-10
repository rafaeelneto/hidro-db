const users = require('./Users');
const db = require('../database/db');

//Columns to use
const poçoInfoColumns = 'poço_id, nome, usr_modif, data_modif, setor_id, un_id, municipio_id, latitude, longitude, situaçao, profun,  ne, nd, revest, vazao_max, data_op::DATE, data_perf::DATE, bomba, horas_bomb, relatorio, licenc_situ, obspoco';
const superfInfoColumns = 'super_id, nome, usr_modif, data_modif, setor_id, un_id, municipio_id, latitude, longitude, corpo_hidrc, situaçao, vazao_max, data_op::DATE, bomba, horas_bomb, relatorio, licenc_situ, obs_s';
const outorgaInfoColumns = 'outorga_id, num_outorga, tipo, data_entrada::DATE, validade::DATE, responsavel, tipo_captacao, outorga_arq, orgao_id, licen_id, obsoutorga, un_id, municipio_id, obsoutorga';
const processoInfoColumns = 'processo_id, num_processo, data_entrada::DATE, orgao_id, situaçao, un_id, municipio_id, outorga_id, licen_id';
const notificaçaoInfoColumns = 'notif_id, num_notif, tipo_nota, prazo::DATE, data_emissao, data_recebim, data_resp, via_receb, condns, situaçao_notif, oficio_id, obs_notif, orgao_id, licen_id, setor_id, municipio_id, un_id';
const licençaInfoColumns = 'licen_id, num_licen, tipo, data_entrada::DATE, validade::DATE, atividade, licen_arq, orgao_id';
const autoInfraçaoInfoColumns = 'autoifr_id, num_infra, obj_autuado, processo_id, notificaçao_id, situaçao_auto, data_emissao, data_defesa, prazo_defesa, orgao_id, setor_respon, oficio_id, licen_id, municipio_id, un_id, setor_id';
const analisesInfoColumns = 'analise_id, numafq, numab, data_coleta::DATE, data_coletabac::DATE, data_exame, data_examebac coletor, fonte, tratamento, potabilidade, diretorio, poço_id, super_id, un_id, obs';

const outorgaPoçoJoinInfo = (type, id) => {return `SELECT outorga_id FROM outorga_poço_link WHERE ${type}=${id}`};
const outorgaSuperfJoinInfo = (type, id) => {return `SELECT outorga_id FROM outorga_superf_link WHERE ${type}=${id}`};
const processoPoçoJoinInfo = (type, id) => {return `SELECT processo_id FROM processo_poço_link WHERE ${type}=${id}`};
const processoSuperfJoinInfo = (type, id) => {return `SELECT processo_id FROM processo_superf_link WHERE ${type}=${id}`};

const poçoOutorgaJoinInfo = (type, id) => {return `SELECT poço_id FROM outorga_poço_link WHERE ${type}=${id}`};
const superfOutorgaJoinInfo = (type, id) => {return `SELECT super_id FROM outorga_superf_link WHERE ${type}=${id}`};
const poçoProcessoJoinInfo = (type, id) => {return `SELECT poço_id FROM processo_poço_link WHERE ${type}=${id}`};
const superfProcessoJoinInfo = (type, id) => {return `SELECT super_id FROM processo_superf_link WHERE ${type}=${id}`};

const vazoesPoçoJoin = (type, id) => {return `SELECT vazao, nd, data_medida::DATE FROM vazoes_poços WHERE ${type}=${id}`};
const vazoesSuperfJoin = (type, id) => {return `SELECT vazao, data_medida::DATE FROM vazoes_superf WHERE ${type}=${id}`};

async function getGIS(table, columns, conditions, param){
    const result = await db.query(
        `SELECT *
            FROM (
                SELECT
                    'FeatureCollection' as "type",
                    array_to_json(array_agg(f)) as "features"
                FROM (
                    SELECT
                        'Feature' as "type",
                        ST_AsGeoJSON(geom) :: json as "geometry",
                        (
                            SELECT json_strip_nulls(row_to_json(t))
                            FROM (
                                SELECT
                                    ${columns}
                            ) t
                        ) as "properties"
                    FROM ${table}
                    ${conditions}
                ) as f
            ) as fc;`, 
        param
    );
    
    return result.rows[0];
}

async function getTableGeneric(table, columns){
    const result = await db.query(`SELECT ${columns} FROM ${table}`, []);
    return result.rows;
}

async function getInfo(table, columns, options, conditions, param){
    const result = await db.query(`SELECT ${columns} FROM ${table} ${options} ${conditions}`, param);
    return result.rows[0];
}

const tableNames = {
    poços: "poços",
    cap_super: "cap_super",
    uns: "uns",
    regionais: "regionais",
    setores_sedes: "setores_sedes",
    municipios: "municipios",
    outorgas: "outorgas",
    licenças: "licenças",
    autosInfra: "autos_infraçao",
    processos: "processos",
    notificaçoes: "notificaçoes",
    analises: "analises_fqb",
    oficios: "oficios",
    orgaos: "orgaos",
    situaçoes: "situaçao_notif",
    vazoesPoços: "vazoes_poços",
    vazoesSuperf: "vazoes_superf",
}

//function
exports.getGIS = getGIS;
exports.getInfo = getInfo;
exports.getTableGeneric = getTableGeneric;

exports.tableNames = tableNames;

exports.poçoInfoColumns = poçoInfoColumns;
exports.superfInfoColumns = superfInfoColumns;
exports.outorgaInfoColumns = outorgaInfoColumns;
exports.processoInfoColumns = processoInfoColumns;
exports.notificaçaoInfoColumns = notificaçaoInfoColumns;
exports.licençaInfoColumns = licençaInfoColumns;
exports.autoInfraçaoInfoColumns = autoInfraçaoInfoColumns;
exports.analisesInfoColumns = analisesInfoColumns;

exports.outorgaPoçoJoinInfo = outorgaPoçoJoinInfo;
exports.outorgaSuperfJoinInfo = outorgaSuperfJoinInfo;
exports.processoPoçoJoinInfo = processoPoçoJoinInfo;
exports.processoSuperfJoinInfo = processoSuperfJoinInfo;

exports.poçoOutorgaJoinInfo = poçoOutorgaJoinInfo;
exports.superfOutorgaJoinInfo = superfOutorgaJoinInfo;
exports.poçoProcessoJoinInfo = poçoProcessoJoinInfo;
exports.superfProcessoJoinInfo = superfProcessoJoinInfo;

exports.vazoesPoçoJoin = vazoesPoçoJoin;
exports.vazoesSuperfJoin = vazoesSuperfJoin;