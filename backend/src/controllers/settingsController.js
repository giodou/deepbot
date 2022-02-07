function getSettings(req, res, next){
    res.json({
        email: "giovane.negocios@gmail.com"
    });
}

module.exports = {
    getSettings
}