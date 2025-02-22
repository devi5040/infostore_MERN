import React, { Fragment, useActionState } from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'
import { isEmpty, isValidEmail, isValidPassword } from '../../util/validation'
import { useDispatch } from 'react-redux'
import { login } from '../../store/actions/authActions'

function Login( { closeModal } ) {
    const dispatch = useDispatch();

    const loginFormHandle = ( prevFormState, formData ) => {
        const email = formData.get( 'email' );
        const password = formData.get( 'password' );
        console.log( `the email is ${ email } and password is ${ password }` )

        //errors array to get validation errors
        const errors = []

        if ( isEmpty( email ) || !isValidEmail( email ) )
        {
            console.log( 'Inside email if' )
            errors.push( 'Please enter proper email' );
        }
        if ( isEmpty( password ) || !isValidPassword( password ) )
        {
            console.log( 'Inside password if' )
            errors.push( 'Please enter proper password, password must contain atleast 1 uppercase, 1 lowercase and 8 characters long' )
        }
        if ( errors.length > 0 )
        {
            return { errors: errors, enteredValues: { email, password } }
        }
        dispatch( login( { email, password } ) );
        closeModal()
        return { errors: null }
    }

    //initialize form action state
    const [formState, formAction] = useActionState( loginFormHandle, { errors: null } )
    return (
        <Fragment>
            <Modal modalHeading='Login' closeModal={ closeModal }>
                <form action={ formAction }>
                    <TextInput field='email' type='email' label='Enter your email' placeholder=' ' defaultValue={ formState.enteredValues?.email } />
                    <TextInput field='password' type='password' label='Enter your Password' placeholder=' ' />
                    <button type="submit" className='my-2 bg-secondary text-primary w-full py-2 rounded-md hover:text-secondary hover:bg-primary border border-secondary cursor-pointer'>Login</button>
                    <h3 className='my-2 text-md font-semibold'>Don't have an account? Go to <span className="cursor-pointer">Signup</span></h3>
                    <h3 className='my-2 text-md font-semibold' >Don't know your Password? Go to <span className="cursor-pointer">Forgot Password</span></h3>
                </form>
                { formState.errors && <ul>
                    { formState.errors.map( ( error ) => {
                        return <li key={ error }>{ error }</li>
                    } ) }
                </ul> }
            </Modal>
        </Fragment>
    )
}

export default Login
