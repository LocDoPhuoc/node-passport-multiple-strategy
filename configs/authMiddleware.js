module.exports = function(req, res, next){
    if(req.isAuthenticated() && req.user && req.user.account_id){
        next();
    }

    res.redirect("/");
}
