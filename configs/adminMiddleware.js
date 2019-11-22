module.exports = function(req, res, next){
    if(req.isAuthenticated() && req.user && req.user.admin_user){
        next();
    }

    res.redirect("/");
}
