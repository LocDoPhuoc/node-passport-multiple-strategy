const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Admin = require('../models/Admin');

module.exports = function(passport){
    // Admin Strategy
    passport.use('admin', 
        new LocalStrategy((username, password, done) => {
            // Match admin user
            Admin.findOne({where: {admin_user: username}})
                .then(admin => {
                    if(!admin){
                        return done(null, false, {message: 'ユーザIDまたはパスワードが違います'});
                    }
                    
                    // Match password
                    bcrypt.compare(password, admin.admin_password, (errMatch, isMatch) => {
                        if(errMatch){
                            console.log(errMatch);
                        }

                        if(isMatch){
                            return done(null, admin);
                        }
                        
                        return done(null, false, {message: 'ユーザIDまたはパスワードが違います'});
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        })
    );

    // Client strategy
    passport.use('user', 
        new LocalStrategy((username, password, done) => {
            // Match admin user
            User.findOne({where: {account_user: username}})
                .then(user => {
                    if(!user){
                        return done(null, false, {message: 'ユーザIDまたはパスワードが違います'});
                    }
                    
                    // Match password
                    bcrypt.compare(password, user.account_pass, (errMatch, isMatch) => {
                        if(errMatch){
                            console.log(errMatch);
                        }

                        if(isMatch){
                            return done(null, user);
                        }
                        
                        return done(null, false, {message: 'ユーザIDまたはパスワードが違います'});
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        })
    );

    passport.serializeUser(function(user, done){
        if(user.admin_user){
            done(null, {userId: user.admin_user, isAdmin: true});
        }
        else{
            done(null, {userId: user.account_id, isAdmin: false});
        }
    });

    passport.deserializeUser(function(user, done){
        if(user.isAdmin){
            Admin.findByPk(user.userId).then(user => {
                done(null, user);
            })
            .catch(err => {
                console.log(err);
            })
        }
        else{
            User.findByPk(user.userId).then(user => {
                done(null, user);
            })
            .catch(err => {
                console.log(err);
            })
        }
    });
}