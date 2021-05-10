const mssql = require('mssql');
const dbconfig = require("../../../config/dbConfig");

exports.query_type = {
    SP: 1,
    Query: 2
}

exports.execute = async (Query, param, query_type) => {
    return new Promise(async (resolve, reject) => {
        const con = new mssql.ConnectionPool(dbconfig);
        try {
            con.on('error', (err) => console.log(err));
            await con.connect();
            const req = await con.request();
            const res = await (async () => {
                if (param)
                    param.forEach(element => {
                        req.input(element.name, element.sql_type, element.value);
                    });
                if (query_type == 1) {
                    return await req.execute(Query);
                }
                else {
                    return await req.query(Query);
                }
            })();
            resolve(res);
        } catch (error) {
            reject(error);
        }
        finally {
            con.close();
        }
    });
};
