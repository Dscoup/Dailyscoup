import {API , CONFIG } from '../helpers/index';

export const CreatUser = {
    createUser
}

async function createUser(Userdata)
{
    return await new Promise(function (resolve,reject)
    {
        API.postTokenAPI(CONFIG.Login,{Userdata})
            .then(response =>
                {
                    let res = JSON.parse(response);
                    if(res.is_success)
                    {
                        resolve(res.data);
                    }
                    else{
                        reject(res.message);
                    }
                })
    })
}