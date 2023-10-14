const UserService = require('../services/user.services');


exports.register = async (req, res, next) => {
    try {
        const { phone } = req.body;
        const successRes = await UserService.registerUser(phone);
        // console.log(successRes);
        // res.json({ status: true, success: `user Registered succesfully ${phone}`, otp: `${successRes}` });
        return res.status(200).send({
            status: true, success: `user Registered succesfully ${phone}`, otp: `${successRes['otp']}`, hashk: `${successRes['hash']}`
        });
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
            status: true,
            message: results,
        });
    });
};

exports.verifyOTP = (req, res, next) => {
    UserService.verifyOTP(req.body, (error, results) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            status: true,
            message: results,
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

exports.FindUser = async (req, res, next) => {
    try {
        console.log("in controller finduser try block");
        // const successRes = await UserService.registerUser(phone);

        const successRes = await UserService.FindUser(req.body);


        return res.status(200).send({
            status: true,
            message: "Success",
            data: successRes,
        });
    }


    catch (error) {
        throw error


    }



    // UserService.FindUser(req.body, (error, results) => {

    //     if (error) {
    //         return next(error);
    //     }
    //     return res.status(200).send({
    //         status: true,
    //         message: "Success",
    //         data: results,

    //     });
    // })
}