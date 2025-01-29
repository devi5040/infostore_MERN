const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
require( 'dotenv' ).config();

const PORT = process.env.PORT || 8080;

//require all the routes
const authRoutes = require( './routes/auth' )

//Initialize app
const app = express();
//Initialize bodyparser
app.use( bodyParser.json() );

//use routes
app.use( '/auth', authRoutes );

mongoose.connect( process.env.MONGO_URI ).then( () => {
    app.listen( PORT, () => {
        console.log( 'Connected in port:', PORT );
    } )
} ).catch( error => {
    console.log( error );
    res.status( 500 ).json( { message: 'Some error has been occured' } );
} )



