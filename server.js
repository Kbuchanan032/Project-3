const express = require("express");
const db = require('./models')
const mongoose = require ("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require('passport')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require('./config/passport')(passport, db.User)
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true}));
app.use(require('express-session')({secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true}))
app.use(passport.initialize());
app.use(passport.session());

//Add routes, both API and view
app.use(routes);

//Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shelterfinder');

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
