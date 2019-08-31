const users = require('./Users');
const db = require('../database/db');

//Columns to use
const poçoInfoColumns = 'poço_id, nome, usr_modif, data_modif, setor_id, un_id, municipio_id, latitude, longitude, situaçao, profun,  ne, nd, revest, vazao_max, data_op, data_perf, bomba, horas_bomb, relatorio, licenc_situ, obspoco';
const superfInfoColumns = 'super_id, nome, usr_modif, data_modif, setor_id, un_id, municipio_id, latitude, longitude, corpo_hidrc, situaçao, vazao_max, data_op, bomba, horas_bomb, relatorio, licenc_situ, obs_s';
const outorgaInfoColumns = 'outorga_id, num_outorga, tipo, data_entrada, validade, responsavel, tipo_captaçao, outorga_arq, orgao_id, licen_id, obsoutorga, un_id, municipio_id, obsoutorga';
const processoInfoColumns = 'processo_id, num_processo, data_entrada, orgao_id, situaçao, un_id, municipio_id, outorga_id, licen_id';
const notificaçaoInfoColumns = 'notif_id, num_notif, tipo_nota, prazo, data_emissao, data_recebim, data_resp, via_receb, condns, situaçao_notif, oficio_id, obs_notif, orgao_id, licen_id, setor_id, municipio_id, un_id';
const licençaInfoColumns = 'licen_id, num_licen, tipo, data_entrada, validade, atividade, licen_arq, orgao_id';
const autoInfraçaoInfoColumns = 'autoifr_id, num_infra, obj_autuado, processo_id, notificaçao_id, situaçao_auto, data_emissao, data_defesa, prazo_defesa, orgao_id, setor_respon, oficio_id, licen_id, municipio_id, un_id, setor_id';
const analisesInfoColumns = 'analise_id, numafq, numab, data_coleta, data_coletabac, data_exame, data_examebac coletor, fonte, tratamento, potabilidade, diretorio, poço_id, super_id, un_id, obs';

const outorgaPoçoJoinInfo = 'SELECT outorga_id FROM outorga_poço_link WHERE $1=$2';
const outorgaSuperfJoinInfo = 'SELECT outorga_id FROM outorga_superf_link WHERE $1=$2';
const processoPoçoJoinInfo = 'SELECT processo_id FROM processo_poço_link WHERE $1=$2';
const processoSuperfJoinInfo = 'SELECT processo_id FROM processo_superf_link WHERE $1=$2';

const vazoesPoçoJoin = 'SELECT vazao, nd, data_medida FROM vazoes_poços WHERE $1=$2';
const vazoesSuperfJoin = 'SELECT vazao, data_medida FROM vazoes_superf WHERE $1=$2';

async function getGIS(table, columns, conditions, param){
    console.log(table);
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
    console.log(table);
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

exports.vazoesPoçoJoin = vazoesPoçoJoin;
exports.vazoesSuperfJoin = vazoesSuperfJoin;