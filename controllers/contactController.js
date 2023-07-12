const asyncHandler = require("express-async-handler");
const CustomError = require('../helpers/errorHelper');
const sendEmail = require("../helpers/nodemailerHelper");

const send = asyncHandler(async(req, res, next)=> {

    await sendEmail({
        from: process.env.SMTP_USER,
        to: req.body.email,
        subject: "Send from SMARTEDU",
        text: req.body.comments
    }).then(()=>{

        req.flash("success", "your mail has been sent successfully")
        res.redirect('/contact');
    }).catch(()=> {
        // req.flash("error", "your mail was not sent successfully")
        // res.redirect('/contact');
        return next(new CustomError("email başarısız", 400))
    })

});

module.exports = {
    send
}