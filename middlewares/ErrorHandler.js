const CustomError = require("../helpers/errorHelper");

const errorHandler = (err, req, res, next) => {
    let customError = err;

    if( err.name == "SyntaxError" ) {
        customError = new CustomError("Yazım Hatası" +  err.message, 400);
    }
    if( err.message.includes("duplicate") ) {
        customError = new CustomError("kurs adı kullanılmakta.", 400);
    }
   

    res.status(customError.status || 500)
    .json({
        success: false,
        message: customError.message
    })
}

module.exports = errorHandler;