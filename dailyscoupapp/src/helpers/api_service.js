import { CONFIG } from './config';
import { LocalStorage } from './index';
// import { LocalStorage, history } from './index';

let baseURL = CONFIG.API_BASE_URL;

export const API = {
  getAPI,
  postAPI,
  postAppTokenAPI,
  getTokenAPI,
  postTokenAPI,
  uploadFileAPI,
  getExternalAPI,
  fetchTokenAPI
};

function getExternalAPI(url, params = {}, contentType = "", key = null, auth = null, xKey = null, xProduct = null) {
  // url = baseURL + url;
  if (params) {
    var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    url += "?" + queryString;
  }
  return new Promise((resolve, reject) => {
    try {
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status >= 500) {
            reject(new Error("Application not able to connect to the server. Please check your internet connection."));
          }
          else if (this.status === 422) {
            resolve(this.responseText);
          }
          else if (this.status === 404) {
            reject(new Error("You are not authorize to access the page. Please contact administrator."));
          }
          else if (this.status === 401) {
            localStorage.clear();
            sessionStorage.clear();
            // window.location.hash === "#/Review" || window.location.hash === "" ? null : history.push('/Review?status=401', 'Review');
          }
          else if (this.status === 200) {
            resolve(this.responseText);
          }
        }
      };
      xhttp.open("GET", url, true);
      contentType = contentType ? contentType : "application/json";
      xhttp.setRequestHeader("content-type", contentType);
      // key ? xhttp.setRequestHeader("Api-Key", key) : null;
      // auth ? xhttp.setRequestHeader("Authorization", auth) : null;
      // xKey ? xhttp.setRequestHeader("x-api-key", xKey) : null;
      // xProduct ? xhttp.setRequestHeader("x-product", xProduct) : null;
      params ? contentType === "application/json" ? xhttp.send(JSON.stringify(params)) : xhttp.send(params) : xhttp.send();
    }
    catch (error) {
      reject(error);
    }
  });
}

function getAPI(url, params = {}, contentType = "") {
  url = baseURL + url;
  if (params) {
    var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    url += "?" + queryString;
  }
  return new Promise((resolve, reject) => {
    try {
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status >= 500) {
            reject(new Error("Application not able to connect to the server. Please check your internet connection."));
          }
          else if (this.status === 422) {
            resolve(this.responseText);
          }
          else if (this.status === 404) {
            reject(new Error("You are not authorize to access the page. Please contact administrator."));
          }
          else if (this.status === 401) {
            localStorage.clear();
            sessionStorage.clear();
            // window.location.hash === "#/Review" || window.location.hash === "" ? null : history.push('/Review?status=401', 'Review');
          }
          else if (this.status === 200) {
            resolve(this.responseText);
          }
        }
      };
      xhttp.open("GET", url, true);
      contentType = contentType ? contentType : "application/json";
      xhttp.setRequestHeader("Content-Type", contentType);
      params ? contentType === "application/json" ? xhttp.send(JSON.stringify(params)) : xhttp.send(params) : xhttp.send();
    }
    catch (error) {
      reject(error);
    }
  });
}

function postAPI(url, params = {}, contentType = "", headers = "") {

  url = baseURL + url;

  return new Promise((resolve, reject) => {
    try {
      let xhttp = new XMLHttpRequest();
      //xhttp.withCredentials = true;
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status >= 500) {
            reject(new Error("Application not able to connect to the server. Please check your internet connection."));
          }
          else if (this.status === 422) {
            resolve(this.responseText);
          }
          else if (this.status === 404) {
            reject(new Error("You are not authorize to access the page. Please contact administrator."));
          }
          else if (this.status === 401) {
            localStorage.clear();
            sessionStorage.clear();
            // window.location.hash === "#/Review" || window.location.hash === "" ? null : history.push('/Review?status=401', 'Review');
          }
          else if (this.status === 200) {
            resolve(this.responseText);
          }
        }
      };
      xhttp.open("POST", url, true);
      contentType = contentType ? contentType : "application/json";
      xhttp.setRequestHeader("Content-Type", contentType);
      xhttp.setRequestHeader("clientid",headers.clientid);
      xhttp.setRequestHeader("apikey",headers.apikey);
      //xhttp.setRequestHeader("cache-control", "no-cache");
      params ? contentType === "application/json" ? xhttp.send(JSON.stringify(params)) : xhttp.send(params) : xhttp.send();
    } catch (error) {
      reject(error);
    }
  });
}

function postAppTokenAPI(url, params = {}, contentType = "") {
  url = baseURL + url;
  let token = LocalStorage.getData("atkn") !== null && LocalStorage.getData("atkn") !== "" ? LocalStorage.getData("atkn") : '';
  if (!token) throw "error";

  return new Promise((resolve, reject) => {
    try {
      let xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status >= 500) {
            reject(new Error("Application not able to connect to the server. Please check your internet connection."));
          }
          else if (this.status === 422) {
            resolve(this.responseText);
          }
          else if (this.status === 404) {
            reject(new Error("You are not authorize to access the page. Please contact administrator."));
          }
          else if (this.status === 401) {
            localStorage.clear();
            sessionStorage.clear();
            // window.location.hash === "#/Review" || window.location.hash === "" ? null : history.push('/Review?status=401', 'Review');
          }
          else if (this.status === 200) {
            resolve(this.responseText);
          }
        }
      };
      xhttp.open("POST", url, true);
      contentType = contentType ? contentType : "application/json";
      xhttp.setRequestHeader("Content-Type", contentType);
      xhttp.setRequestHeader("Authorization", "Bearer " + token);
      params ? contentType === "application/json" ? xhttp.send(JSON.stringify(params)) : xhttp.send(params) : xhttp.send();
    } catch (error) {
      reject(error);
    }
  });
}

function getTokenAPI(url, params = {}, contentType = "") {
  if(LocalStorage.getData("anchar") === "a") return false; // anchar click() session logout fixed
  url = baseURL + url;

  
  if (Object.keys(params).length !== 0) {
    var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    url += "?" + queryString;
  }

  let token = LocalStorage.getData("tkn") !== null && LocalStorage.getData("tkn") !== "" ? LocalStorage.getData("tkn") : LocalStorage.getSessionData("tkn");
  let ud = LocalStorage.getData("ud") !== null && LocalStorage.getData("ud") !== "" ? LocalStorage.getData("ud") : LocalStorage.getSessionData("ud");

  if (!token) throw "error";

  return new Promise((resolve, reject) => {
    try {
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status >= 500) {
            reject(new Error("Application not able to connect to the server. Please check your internet connection."));
          }
          else if (this.status === 422) {
            resolve(this.responseText);
          }
          else if (this.status === 404) {
            reject(new Error("You are not authorize to access the page. Please contact administrator."));
          }
          else if (this.status === 401) {
            localStorage.clear();
            sessionStorage.clear();
            // window.location.hash === "#/Review" || window.location.hash === "" ? null : history.push('/Review?status=401', 'Review');
          }
          else if (this.status === 200) {
            resolve(this.responseText);
          }
        }
      };
      xhttp.open("GET", url, true);
      contentType = contentType ? contentType : "application/json";
      xhttp.setRequestHeader("Content-Type", contentType);
      xhttp.setRequestHeader("Authorization", "Bearer " + token);
      xhttp.setRequestHeader("ud", ud);
      //params ? contentType === "application/json" ? xhttp.send(JSON.stringify(params)) : xhttp.send(params) : xhttp.send();
      xhttp.send();
    }
    catch (error) {
      reject(error);
    }
  });
}

function postTokenAPI(url, params = {}, contentType = "") {
  url = baseURL + url;
  let token = LocalStorage.getData("tkn") !== null && LocalStorage.getData("tkn") !== "" ? LocalStorage.getData("tkn") : LocalStorage.getSessionData("tkn");
  let ud = LocalStorage.getData("ud") !== null && LocalStorage.getData("ud") !== "" ? LocalStorage.getData("ud") : LocalStorage.getSessionData("ud");

  if (!token) throw "error";

  return new Promise((resolve, reject) => {
    try {
      let xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status >= 500) {
            reject(new Error("Application not able to connect to the server. Please check your internet connection."));
          }
          else if (this.status === 422) {
            resolve(this.responseText);
          }
          else if (this.status === 404) {
            reject(new Error("You are not authorize to access the page. Please contact administrator."));
          }
          else if (this.status === 401) {
            localStorage.clear();
            sessionStorage.clear();
            // window.location.hash === "#/Review" || window.location.hash === "" ? null : history.push('/Review?status=401', 'Review');
          }
          else if (this.status === 200) {
            resolve(this.responseText);
          }
        }

      };
      xhttp.open("POST", url, true);
      contentType = contentType ? contentType : "application/json";
      xhttp.setRequestHeader("Content-Type", contentType);
      xhttp.setRequestHeader("Authorization", "Bearer " + token);
      xhttp.setRequestHeader("ud", ud);
      params ? contentType === "application/json" ? xhttp.send(JSON.stringify(params)) : xhttp.send(params) : xhttp.send();
    }

    catch (error) {
      reject(error);
    }
  });
}

function uploadFileAPI(url, params = {}) {
  url = baseURL + url;
  let token = LocalStorage.getData("tkn") !== null && LocalStorage.getData("tkn") !== "" ? LocalStorage.getData("tkn") : LocalStorage.getSessionData("tkn");
  let ud = LocalStorage.getData("ud") !== null && LocalStorage.getData("ud") !== "" ? LocalStorage.getData("ud") : LocalStorage.getSessionData("ud");

  let formData = new FormData();
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      formData.append(key, value);
    }
  }

  if (!token) throw "error";

  return new Promise((resolve, reject) => {
    try {

      let xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status >= 500) {
            reject(new Error("Application not able to connect to the server. Please check your internet connection."));
          }
          else if (this.status === 422) {
            resolve(this.responseText);
          }
          else if (this.status === 404) {
            reject(new Error("You are not authorize to access the page. Please contact administrator."));
          }
          else if (this.status === 401) {
            localStorage.clear();
            sessionStorage.clear();
            // window.location.hash === "#/Review" || window.location.hash === "" ? null : history.push('/Review?status=401', 'Review');
          }
          else if (this.status === 200) {
            resolve(this.responseText);
          }
        }
      };
      xhttp.open("POST", url, true);
      xhttp.setRequestHeader("Authorization", "Bearer " + token);
      xhttp.setRequestHeader("ud", ud);
      xhttp.send(formData)
    }
    catch (error) {
      reject(error);
    }
  });
}

function fetchTokenAPI(url, params = {}, contentType = "") {
  url = baseURL + url;
  let token = LocalStorage.getData("tkn") !== null && LocalStorage.getData("tkn") !== "" ? LocalStorage.getData("tkn") : LocalStorage.getSessionData("tkn");
  // let ud = LocalStorage.getData("ud") !== null && LocalStorage.getData("ud") !== "" ? LocalStorage.getData("ud") : LocalStorage.getSessionData("ud");
  contentType = contentType ? contentType : "application/json";
  if (!token) throw "error";

  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
          "authorization": "Bearer " + token,
          "content-type": contentType,
          "cache-control": "no-cache",
          "postman-token": "be6cad0b-db11-57a8-bede-ea37ce8e89c8"
      },
      body: JSON.stringify(params),  //body: JSON.stringify(data) // body data type must match "Content-Type" header
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     
  };
  
     fetch(url, requestOptions)
        .then( res => {

         const result =   res.json();

             if (res.status >= 500) {
                reject(new Error("Application not able to connect to the server. Please check your internet connection."));
              }
              else if (res.status === 422) {
                resolve(result);
              }
              else if (res.status === 404) {
                reject(new Error("You are not authorize to access the page. Please contact administrator."));
              }
              else if (res.status === 401) {
                localStorage.clear();
                sessionStorage.clear();
                // window.location.hash === "#/Review" || window.location.hash === "" ? null : history.push('/Review?status=401', 'Review');
              }
              else if (res.status === 200) {
                resolve(result);
              }

          // // check for error response
          // if (!res.ok) {
          //   // get error message from body or default to response status
          //   const error = (result && result.message) || res.status;
          //   reject(error);
          //   return Promise.reject(error);
          //   }
          //   else{
          //     resolve(result);
          //     return Promise.resolve(result);
             
          //   }

        })
        .catch(error => {
         
          reject(error);
      });
        
      // let xhttp = new XMLHttpRequest();

      // xhttp.onreadystatechange = function () {
      //   if (this.readyState === 4) {
      //     if (this.status >= 500) {
      //       reject(new Error("Application not able to connect to the server. Please check your internet connection."));
      //     }
      //     else if (this.status === 422) {
      //       resolve(this.responseText);
      //     }
      //     else if (this.status === 404) {
      //       reject(new Error("You are not authorize to access the page. Please contact administrator."));
      //     }
      //     else if (this.status === 401) {
      //       localStorage.clear();
      //       sessionStorage.clear();
      //       window.location.hash === "#/Review" || window.location.hash === "" ? null : history.push('/Review?status=401', 'Review');
      //     }
      //     else if (this.status === 200) {
      //       resolve(this.responseText);
      //     }
      //   }

      // };
      // xhttp.open("POST", url, true);
      // contentType = contentType ? contentType : "application/json";
      // xhttp.setRequestHeader("Content-Type", contentType);
      // xhttp.setRequestHeader("Authorization", "Bearer " + token);
      // xhttp.setRequestHeader("ud", ud);
      // params ? contentType === "application/json" ? xhttp.send(JSON.stringify(params)) : xhttp.send(params) : xhttp.send();
    
  });
}