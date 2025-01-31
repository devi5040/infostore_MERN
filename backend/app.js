const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
require ('dotenv').config ();

const PORT = process.env.PORT || 8080;

//require all the routes
const authRoutes = require ('./routes/auth');
const profileRoutes = require ('./routes/profile');

//Initialize app
const app = express ();
//Initialize bodyparser
app.use (bodyParser.json ());

//set userId in req
app.use ((req, res, next) => {
  req.userId = req.body.userId;
  next ();
});

//use routes
app.use ('/auth', authRoutes);
app.use ('/profile', profileRoutes);

mongoose
  .connect (process.env.MONGO_URI)
  .then (() => {
    app.listen (PORT, () => {
      console.log ('Connected in port:', PORT);
    });
  })
  .catch (error => {
    console.log (error);
    res.status (500).json ({message: 'Some error has been occured'});
  });
