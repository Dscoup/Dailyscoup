var sqlType = require('mssql');
const db_library = require('../_helpers/db_library')
const param = require('../_models/parameter_input');

exports.login = async (emailId) => {
    return await new Promise(async (resolve, reject) => {
        let parameters = [];
        let para = new param('emailId', sqlType.INT, emailId);
        parameters.push(para);

        db_library
            .execute("[dbo].[SP_TripRequest]", parameters, db_library.query_type.SP).then(async (value) => {
                resolve(value.recordsets[0]);
            }).catch(err => {
                reject(err)
            });
    })
}

exports.register = async (emailId,password) => {
    return await new Promise(async (resolve, reject) => {
        let parameters = [];
        let para = new param('emailId', sqlType.INT, emailId);
        parameters.push(para);
        let para1 = new param('password', sqlType.NVarChar, password);
        parameters.push(para1);

        db_library
            .execute("[dbo].[SP_AddEditUser]", parameters, db_library.query_type.SP).then(async (value) => {
                resolve(value.recordsets[0]);
            }).catch(err => {
                reject(err)
            });
    })
}


exports.getallusers = async (userid) => {
    return await new Promise(async (resolve, reject) => {
        let parameters = [];
        let para = new param('userid', sqlType.INT, userid);
        parameters.push(para);
        
        db_library
            .execute("[dbo].[SP_GetUserList]", parameters, db_library.query_type.SP).then(async (value) => {
                resolve(value.recordsets[0]);
            }).catch(err => {
                reject(err)
            });
    })
}