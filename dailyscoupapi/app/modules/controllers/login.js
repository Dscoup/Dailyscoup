// const output = require("../app/modules/_models/output");
const output = require("../_models/output");
const loginRepo = require("../repository/login");

exports.login = async function (req, res, next) {
    var _output = new output();
    try {
        if (req.query.emailId == undefined) { throw { message: "Invalid Email Id" } }
        let result = await loginRepo.login(req.query.OperationId);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "Trip Request Get Successfull";
    } catch (error) {
        _output.data = error.message;
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};


exports.register = async function (req, res, next) {
    var _output = new output();
    try {
        if (req.query.emailId == undefined) { throw { message: "Email id not found" } }
        let result = await loginRepo.login(req.query.OperationId);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "user Registered Successfull";
    } catch (error) {
        _output.data = error.message;
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};

exports.AddEditUser = async function (req, res, next) {
    var _output = new output();
    try {
        if (req.query.emailId == undefined) { throw { message: "Email id not found" } }
        let result = await loginRepo.AddEditUser(req.query.OperationId);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "password reset Successfull";
    } catch (error) {
        _output.data = error.message;
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};


exports.forgotPass = async function (req, res, next) {
    var _output = new output();
    try {
        if (req.query.emailId == undefined) { throw { message: "Email id not found" } }
        let result = await loginRepo.forgotPass(req.query.OperationId);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "password reset Successfull";
    } catch (error) {
        _output.data = error.message;
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};

exports.getallusers = async function (req, res, next) {
    var _output = new output();
    try {
        if (req.query.userid == undefined) { throw { message: "userid not found" } }
        let result = await loginRepo.getallusers(req.query.userid);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "user list got Successfull";
    } catch (error) {
        _output.data = error.message;
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};





