const getAccessToRoute = (req, res, next)=> {
    if(req.session.userID){
        next()
    }
    res.status(401).redirect("login");

}

const alredyRegistered = (req, res, next)=> {
    if(!req.session.userID){
        next()

    }
    res.status(400).redirect("dashboard");
}

module.exports = {
    getAccessToRoute,
    alredyRegistered
}