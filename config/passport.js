var db = require("../models");
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


module.exports = function() {
  passport.use( new LocalStrategy(
    function(email, password, done) {
      db.User.indOne({email: email}, function (err, user) {
        if (err) { return done(err); }
        if(!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

  //LOCAL SIGNIN
  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, done) {
        var isValidPassword = function(userpass, password) {
          return userpass === password;
        };
         User.findOne({
          where: {
            email: email
          }
        })
          .then(function(user) {
            if (!user) {
              return done(null, false, {
                message: "Email does not exist"
              });
            }

            if (!isValidPassword(user.password, password)) {
              return done(null, false, {
                message: "Incorrect password."
              });
            }

            var userinfo = user.get();
            console.log(userinfo)
            return done(null, userinfo);
          })
          .catch(function(err) {
            console.log("Error:", err);
            return done(null, false, {
              message: "Something went wrong"
            });
          });
      }
    )
  );

  //serialize
  passport.serializeUser(function(user, done) {
    var sessionUser = { name: user.firstname, email: user.email}
    console.log(sessionUser)
    done(null, sessionUser);
  });

  //deserialize
  passport.deserializeUser(function(sessionUser, done) {
    console.log(sessionUser)
    done(null, {firstname: sessionUser.name, email: sessionUser.email});
    
  });

};