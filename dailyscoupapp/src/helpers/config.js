
const API_config = require('./api_config.json');
const PACKAGE = require('../../package.json')


export const CONFIG = {

    API_BASE_URL : API_config[PACKAGE.environment]["API_BASE_URL"],

    //login
    LoGIN : "/login"
}