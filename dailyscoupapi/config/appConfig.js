"use strict";
const prefix = '';
module.exports = {
  EXPIRES: 86400,
  JWT_SECRET_KEY: 'CCNA',
  PREFIX: prefix,
  MailTemplate: {},
  CROS_OPTIONS: {
    origin: ["http://localhost:3000"],
    allowedHeaders: [
      "Content-Type",
      "Access-Control-Allow-Origin",
      "Authorization",
      "ud",
      "X-Requested-With",
      "Access-Control-Allow-Credentials",
      "Access-Control-Max-Age",
      "Access-Control"
    ],
    EXPOSEDHEADERS: ["Authorization"],
    ALLOWEDMETHODS: ["GET,POST"],
    credentials: true,
  },
  defaultPassword: 'ccna',
  isDefault: true
};
