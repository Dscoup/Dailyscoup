export const LocalStorage = {
    getData,
    setData,
    clearData,
    getSessionData,
    setSessionData,
    clearSessionData,
    getLocOrSesData,
    setLocOrSesData,
    clearLocOrSesData
};

function getData(key) {
    return JSON.parse(localStorage.getItem(key));
}
function setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
function clearData(key) {
    localStorage.removeItem(key);
}
function getSessionData(key) {
    return JSON.parse(sessionStorage.getItem(key));
}
function setSessionData(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
}
function clearSessionData(key) {
    sessionStorage.removeItem(key);
}
function getLocOrSesData(key) {
    let dt = localStorage.getItem(key) ? localStorage.getItem(key) : sessionStorage.getItem(key)
    return JSON.parse(dt);
}
function setLocOrSesData(key, data) {
     
}
function clearLocOrSesData(key) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
}