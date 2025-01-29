const mongoose = require( 'mongoose' );
const User = require( '../models/user' )
const bcrypt = require( 'bcryptjs' );
const { validationResult } = require( 'express-validator' );

//sending emails
const nodemailer = require( "nodemailer" );
// nodemailer.config();

//ethernal email for smtp server
const transporter = nodemailer.createTransport( {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
} );

async function sendEmail( email ) {
    await transporter.sendMail( {
        from: "Deviprasad <dpraimd@gmail.com>",
        to: email,
        subject: "Hello world",
        html: "<h1>Hello,</h1><p>Thank you for registering to Infostore<p><p>We welcome you to our family</p><div>For any support please contact <a href='mailto:dpraimd@gmail.com'>Support</a></div>",
    } );
}

//register route handling
exports.register = ( req, res, next ) => {
    //check for validation errors
    const errors = validationResult( req );
    if ( !errors.isEmpty() )
    {
        return res.status( 400 ).json( { errors: errors.array() } );
    }
    //extract data from req.body
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    User.findOne( { email: email } ).then( user => {
        if ( user )
        {
            res.status( 422 ).json( { message: 'Email already exisists please provide unique email id.' } )
        }
        return bcrypt.hash( password, 12 );
    } ).then( hashedPassword => {
        const user = new User( {
            email: email,
            name: name,
            password: hashedPassword
        } );
        sendEmail( email ).then( () => console.log( 'mail sent to:', email )
        ).catch( err => { console.log( err ); res.status( 500 ).json( { message: "Some error has been occured" } ) } );
        return user.save();
    } ).then( result => {

        res.status( 201 ).json( { message: "User has been created successfully", user: result } )
    } ).catch( err => {
        console.log( err );
        res.status( 500 ).json( { message: 'Some error has been occured' } )
    } );

}

//login route handling
exports.login = ( req, res, next ) => {
    console.log( 'login' );
}

//forgot-password route handling
exports.forgotPassword = ( req, res, next ) => {
    console.log( 'forgotPassword' );
}

//change-password route handling
exports.changePassword = ( req, res, next ) => {
    console.log( 'changePassword' );
}