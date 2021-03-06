const config = require('../config/config.json');
const modeconfig = require('../config/env_mode.json')
const ENV_MODE = modeconfig.ENVMODE;
const host = config[ENV_MODE]["server"];
const user = config[ENV_MODE]["user"];
const password = config[ENV_MODE]["password"];
const database = config[ENV_MODE]["database"];
const encrypt = config[ENV_MODE]["encrypt"];

module.exports = {
  server: host,
  user: user,
  password: password,
  database: database,
  connectionTimeout: 300000,
  requestTimeout: 300000,
  options: {
    encrypt: true
  }
};
