const API_config = require('./api_config.json')
const PACKAGE = require('../../package.json');

export const CONFIG = {

	API_BASE_URL: API_config[PACKAGE.environment]["API_BASE_URL"],
	

	IS_SOCKET_CONNECTION_ON: true,
	IS_INTERVEL_TIME: 10000,
	Login: "/login",
	Logout: "/logout",

	};
