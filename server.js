const express = require("express");
const bodyParser = require("body-parser")

const mongoose = require ("mongoose");
// const routes = require("./routes");
// const placesShelters = require('./routes/api/shelters-routes')

const sheltersRoutes = require('./routes/shelters-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();
const PORT = process.env.PORT || 80;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/shelters',sheltersRoutes); // => /api/shelters...
app.use('/api/users', usersRoutes);

app.use((req, res, next) =>{
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});


//Add routes, both API and view
//app.use(routes);
//app.use('/api/shelters', placesShelters);
//Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shelterfinder');

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
