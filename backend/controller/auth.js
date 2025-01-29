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
exports.register = async ( req, res, next ) => {
    const errors = validationResult( req );
    if ( !errors.isEmpty() )
    {
        return res.status( 400 ).json( { errors: errors.array() } );
    }

    const { email, name, password } = req.body;

    try
    {
        // Check if email already exists
        const existingUser = await User.findOne( { email } );
        if ( existingUser )
        {
            return res.status( 422 ).json( { message: 'Email already exists, please provide a unique email id.' } );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash( password, 14 ); // Improved cost factor

        // Create new user
        const newUser = new User( { email, name, password: hashedPassword } );
        const result = await newUser.save();

        // Send email after successful user creation
        await sendEmail( email );

        // Respond with success
        res.status( 201 ).json( { message: 'User has been created successfully', user: result } );
    } catch ( err )
    {
        console.error( 'Error during registration:', err );
        res.status( 500 ).json( { message: 'An error occurred while registering the user.' } );
    }
};


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