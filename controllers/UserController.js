const passport = require('passport');

class UserController{
    index(req, res) {
        res.render('user/login');
    }

    login(req, res, next){
        passport.authenticate('user', {
            successRedirect: '/dashboard',
            failureRedirect: '/login',
            // failureMessage: 'ユーザIDまたはパスワードが違います',
            failureMessage: false,
            failureFlash: true
        })(req, res, next)
    }

    dashboard(req, res){
        res.render('user/list');
    }

    logout(req, res){
        req.logout();
        res.redirect('/');
    }
}

module.exports = UserController;