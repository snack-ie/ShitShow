function getCode(code) {
    return Core.settings.get("cheatCode", "") == code;
}

module.exports = {
    func: getCode
}