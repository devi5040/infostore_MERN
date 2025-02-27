const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
require ('dotenv').config ();
const cookieParser = require ('cookie-parser');
const cors = require ('cors');

const PORT = process.env.PORT || 8080;

//require all the routes
const authRoutes = require ('./routes/auth');
const profileRoutes = require ('./routes/profile');
const documentRoutes = require ('./routes/documents');
const educationRoutes = require ('./routes/education');
const passwordStoreRoutes = require ('./routes/passwordstore');
const homeInfoRoutes = require ('./routes/homeInfo');

//Initialize app
const app = express ();

//Initialize bodyparser
app.use (bodyParser.json ());
app.use (cookieParser ());
app.use (
  cors ({
    origin: ['http://localhost:5173', 'http://localhost:4173'],
    credentials: true,
  })
);
// app.use (express.urlencoded ({extended: true}));
// app.use (express.json ());

app.use ((req, res, next) => {
  res.setHeader ('Access-Control-Allow-Origin', ['http://localhost:5173']);
  res.setHeader (
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader ('Access-Control-Allow-Credentials', true);
  res.setHeader (
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Cookie'
  );
  next ();
});

//use routes
app.use ('/auth', authRoutes);
app.use ('/profile', profileRoutes);
app.use ('/documents', documentRoutes);
app.use ('/education', educationRoutes);
app.use ('/password', passwordStoreRoutes);
app.use ('/home-info', homeInfoRoutes);

mongoose
  .connect (process.env.MONGO_URI)
  .then (() => {
    app.listen (PORT, () => {
      console.log ('Connected in port:', PORT);
    });
  })
  .catch (error => {
    res.status (500).json ({message: 'Some error has been occured'});
  });
