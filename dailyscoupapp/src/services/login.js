import { API, CONFIG } from '../helpers/index';

let baseURL = CONFIG.API_BASE_URL;

const ConfigDetails = CONFIG;

export const LoginService = {
    createUser,
    loginUser
}

// async function createUser(Userdata)
// {
//     return await new Promise(function (resolve,reject)
//     {
//         API.postTokenAPI(CONFIG.Login,{Userdata})
//             .then(response =>
//                 {
//                     let res = JSON.parse(response);
//                     if(res.is_success)
//                     {
//                         resolve(res.data);
//                     }
//                     else{
//                         reject(res.message);
//                     }
//                 })
//     })
// }

function createUser(userdata) {
    return new Promise(function (resolve, reject) {
        API.postAPI(ConfigDetails.Login, userdata,"",{'clientid' : "vecan",'apikey' : "vecan-api-key-12345"})
            .then((response) => {
                console.log(response)
                resolve(response)
            })
            .catch((error) => {
                reject(error);
            });
    });
}


//  function loginUser(credentials) {
//     return fetch(baseURL+CONFIG.Login, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//     .then((response) => {
//         console.log(response)
//         resolve(response)
//     })
//     .catch((error) => {
//         reject(error);
//     });
//    }


 function loginUser(credentials) {
    return fetch(baseURL+'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then((response) => {
        console.log(response)
        
    })
    .catch((error) => {
        console.log(error);
    });
   }