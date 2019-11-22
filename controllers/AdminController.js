const passport = require('passport');

class AdminController{
    index(req, res) {
        res.render('admin/login');
    }

    login(req, res, next){
        passport.authenticate('admin', {
            successRedirect: '/admin/dashboard',
            failureRedirect: '/admin',
            // failureMessage: 'ユーザIDまたはパスワードが違います',
            failureMessage: false,
            failureFlash: true
        })(req, res, next)
    }

    dashboard(req, res){
        res.render('admin/list');
    }

    logout(req, res){
        req.logout();
        res.redirect('/admin');
    }
}

module.exports = AdminController;