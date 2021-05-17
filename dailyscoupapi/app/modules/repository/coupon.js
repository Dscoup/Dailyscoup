var sqlType = require('mssql');
const db_library = require('../_helpers/db_library')
const param = require('../_models/parameter_input');

exports.getUserCouponList = async (userId) => {
    return await new Promise(async (resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.INT, userId);
        parameters.push(para);

        db_library
            .execute("[dbo].[SP_UserCouponList]", parameters, db_library.query_type.SP).then(async (value) => {
                resolve(value.recordsets[0]);
            }).catch(err => {
                reject(err)
            });
    })
}


exports.addEditCoupons = async (data) => {
    return await new Promise(async (resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.INT, data.userId);
        parameters.push(para);
        let para1 = new param('couponId', sqlType.INT, data.couponId);
        parameters.push(para1);
        let para2 = new param('coupondetails', sqlType.NVarChar, data.coupondetails);
        parameters.push(para1);
        db_library
            .execute("[dbo].[SP_AddEditCoupons]", parameters, db_library.query_type.SP).then(async (value) => {
                resolve(value.recordsets[0]);
            }).catch(err => {
                reject(err)
            });
    })
}


exports.getallCoupons = async (userId) => {
    return await new Promise(async (resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.INT, userId);
        parameters.push(para);
        
        db_library
            .execute("[dbo].[SP_GetAllCoupons]", parameters, db_library.query_type.SP).then(async (value) => {
                resolve(value.recordsets[0]);
            }).catch(err => {
                reject(err)
            });
    })
}



exports.userPurchasedCoupons = async (userId,couponid) => {
    return await new Promise(async (resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.INT, userId);
        parameters.push(para);
        let para = new param('couponid', sqlType.INT, couponid);
        parameters.push(para);
        db_library
            .execute("[dbo].[SP_UserPurchasedCoupons]", parameters, db_library.query_type.SP).then(async (value) => {
                resolve(value.recordsets[0]);
            }).catch(err => {
                reject(err)
            });
    })
}

