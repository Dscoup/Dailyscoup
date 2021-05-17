// const output = require("../app/modules/_models/output");
const output = require("../_models/output");
const couponRepo = require("../repository/coupon");

exports.getUserCouponList = async function (req, res, next) {
    var _output = new output();
    try {
        if (req.query.userId == undefined) { throw { message: "user id not exists" } }
        let result = await couponRepo.getUserCouponList(req.query.userId);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "user coupons Get Successfull";
    } catch (error) {
        _output.data = error.message;
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};


exports.addEditCoupons = async function (req, res, next) {
    var _output = new output();
    try {
        // if (req.query.emailId == undefined) { throw { message: "Email id not found" } }
        let result = await couponRepo.addEditCoupons(req.query);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "coupons Registered Successfull";
    } catch (error) {
        _output.data = error.message;
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};


exports.getallCoupons = async function (req, res, next) {
    var _output = new output();
    try {
        if (req.query.userid == undefined) { throw { message: "userid not found" } }
        let result = await couponRepo.getallCoupons(req.query.userid);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "all coupons list got Successfull";
    } catch (error) {
        _output.data = error.message;
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};



exports.userPurchasedCoupons = async function (req, res, next) {
    var _output = new output();
    try {
        if (req.query.userid == undefined) { throw { message: "userid not found" } }
        if (req.query.couponid == undefined) { throw { message: "couponid not found" } }
        let result = await loginRepo.userPurchasedCoupons(req.query.userid,req.query.couponid);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "all coupons list got Successfull";
    } catch (error) {
        _output.data = error.message;
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};




