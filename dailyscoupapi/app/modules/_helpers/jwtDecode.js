var jwt = require('jsonwebtoken');

exports.decodeJWT = (req) => {
    return new Promise((resolve, reject) => {
        try {
            let token = req.headers.authorization.replace("Bearer ", "");
            const appConfig = require("../../../config/appConfig");
            let result = jwt.verify(token, appConfig.JWT_SECRET_KEY);
            resolve(result)
        } catch (error) {
            reject(error.message);
        }
    });
}