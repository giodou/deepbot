const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const settingsRepository = require('../repositories/settingsRepository');

async function doLogin(req, res, next){
    const email = req.body.email;
    const pass = req.body.pass;

    const settings = await settingsRepository.getSettingsByEmail(email);

    if(settings){
        const isValid = bcrypt.compareSync(pass, settings.pass);

        if(isValid){
            const token = jwt.sign({id: settings.id }, process.env.JWT_SECREAT, {
                expiresIn: parseInt(process.env.JWT_EXPIRES)
            })
            
            return res.json({token});
        }
    }

    res.sendStatus(401);
}

const blacklist = [];

function doLogout(req, res, next){
    const token = req.headers['authorization'];
    blacklist.push(token);
    res.sendStatus(200);
}

function isBlacklisted(token){
    return (blacklist.some(t => t===token));
}

module.exports = {
    doLogin,
    doLogout,
    isBlacklisted
}