const express = require("express");
const router = express.Router();
const users = require('../models/Users');
const tables = require('../models/Tables');

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

router.get('/gis/cap', async (req, res) => {
    if (req.query.id) {
        const info = await getInf(req.query.type, req.query.id);
        res.json(info);
    } else {
        poços = await tables.getGIS('poços', 'poço_id, nome, situaçao, licenc_situ', '', []);
        superf = await tables.getGIS('cap_super', 'super_id, nome, situaçao, licenc_situ', '', []);
        res.json([poços, superf]);
    }
    
});

async function getInf(type, id){
    const result = await tables.getInfo('poços', '*', '', `WHERE ${type} = ${id}`, []);
    return result;
}

module.exports = router;