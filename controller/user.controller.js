const UserService = require('../services/user.services');


exports.register = async (req, res, next) => {
    try {
        const { phone } = req.body;
        const successRes = await UserService.registerUser(phone);
        console.log(successRes);
        res.json({ status: true, success: `user Registered succesfully ${phone}` });
    } catch (error) {
        throw error
    }
}

exports.otpLogin = (req, res, next) => {
    UserService.createOtp(req.body, (error, results) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            message: "Success",
            data: results,
        });
    });
};

exports.verifyOTP = (req, res, next) => {
    UserService.verifyOTP(req.body, (error, results) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            message: "Success",
            data: results,
        });
    })
}

exports.addName = (req, res, next) => {
    UserService.addname(req.body, (error, results) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            message: "Success",
            data: results,
        });
    })
}