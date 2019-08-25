const users = require('./Users');
const db = require('../database/db');

async function getGIS(tables, columns, conditions, param){
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
                    FROM ${tables}
                    ${conditions}
                ) as f
            ) as fc;`, 
        param
    );
    return result.rows[0];
}

async function getInfo(tables, columns, options, conditions, param){
    const result = await db.query(`SELECT ${columns} FROM ${tables} ${options} ${conditions}`, param);
    return result.rows[0];
}

exports.getGIS = getGIS;
exports.getInfo = getInfo;