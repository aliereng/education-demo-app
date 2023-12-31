const getAccessToRoute = (req, res, next) => {
    if (req.session.userID) {
        next();
    } else {
        res.redirect('/login');
    }

}

const alredyRegistered = (req, res, next) => {
    if (userIN) {
        res.redirect("/dashboard");
    } else {
        next()
    }
}

const checkRole = (roles) => {
    return (req, res, next) => {
        if (roles.includes(req.session.role)) {
            next();
        } else {
            res.status(400).json({ success: false, message: "yetkiniz yok" });
        }
    }
}

module.exports = {
    getAccessToRoute,
    alredyRegistered,
    checkRole
}