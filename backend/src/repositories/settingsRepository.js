const settingsModel = require('../models/settingsModel');
const bcrypt = require('bcryptjs');
const crypto = require('../utils/crypto');

function getSettingsByEmail(email) {
    return settingsModel.findOne({ where: { email } });
}

function getSettingsById(id) {
    return settingsModel.findOne({ where: { id } });
}

async function updateSettings(id, newSettings) {
    const currentSettings = await getSettingsById(id);

    if (currentSettings.email !== newSettings.email)
        currentSettings.email = newSettings.email;

    if (currentSettings.apiUrl !== newSettings.apiUrl)
        currentSettings.apiUrl = newSettings.apiUrl;

    if (currentSettings.acessKey !== newSettings.acessKey)
        currentSettings.acessKey = newSettings.acessKey;

    if (newSettings.pass)
        currentSettings.pass = bcrypt.hashSync(newSettings.pass);

    if (newSettings.secretKey)
        currentSettings.secretKey = crypto.encrypt(newSettings.secretKey);

    await currentSettings.save();
}

const settingsCache = {};
async function getDecriptedSettings(id){
    let settings = settingsCache[id];

    if(!settings){
        settings = await getSettingsById(id);
        settings.secretKey = crypto.decrypt(settings.secretKey);
        settingsCache[id] = settings;
    }

    return settings;
}

function cleanSettingsCache(id){
    settingsCache[id] = null;
}

module.exports = {
    getSettingsByEmail,
    getSettingsById,
    updateSettings,
    getDecriptedSettings,
    cleanSettingsCache
}