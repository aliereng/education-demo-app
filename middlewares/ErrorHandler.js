const CustomError = require("../helpers/errorHelper");
const {showValidationErrors} = require("../helpers/validationHelper")
const errorHandler = (err, req, res, next) => {
    let customError = err;

    // yazım hataları
    if( err.name == "SyntaxError" ) {
        customError = new CustomError("Yazım Hatası" +  err.message, 400);
    }

    // yineleme hataları
    if( err.message.includes("duplicate") ) {
        // customError = new CustomError("kurs adı kullanılmakta.", 400);
        const field = Object.keys(err.keyValue)
        req.flash("error",`girdiğiniz ${field[0]} zaten kullanımda.`)
    }
    
    // validasyon hataları
    if(err.message.includes("validation")){
        const result = Object.values(err.errors)
        result.map(resp=> {
            // console.log(resp.properties.message)
            req.flash("error",`${resp.properties.message}\n`)
        })
    }

    // login hataları
    if(err.toString().includes("hatalı parola") || err.toString().includes("kullanıcı bulunamadı")){
        req.flash("error","email ya da parola yanlış");
    }

    //email hataları
    if(err.toString().includes("email başarısız")){
        req.flash("error","email gönderme işlemi başarısız.");
    }

    // res.status(customError.status || 500)
    // .json({
    //     success: false,
    //     message: customError.message
    // })
    res.status(customError.status || 500).redirect(`${req.route.path}`)
}

module.exports = errorHandler;