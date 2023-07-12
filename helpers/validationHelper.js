const {validationResult} = require("express-validator");

const showValidationErrors = (req)=> {
    const errors = validationResult(req);
    for(let i = 0; i < errors.array().length; i++){
        req.flash("error", `${errors.array()[i].msg}\n`)
    }

}

module.exports = {
    showValidationErrors
}
