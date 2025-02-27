import React, { useActionState } from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'
import TextAreaInput from '../Form-input/TextAreaInput'
import { Link, useNavigate } from 'react-router-dom'
import { isEmpty, isValidAge, isValidEmail, isValidHeightWeight, isValidMobileNumber, isValidName, isValidPassword, passwordMatches } from '../../util/validation'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { register } from '../../store/actions/authActions'

function Signup( { closeModal } ) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signupHandler = async ( prevFormState, formData ) => {
        const name = formData.get( 'name' ).trim();
        const email = formData.get( 'email' ).trim();
        const password = formData.get( 'password' ).trim()
        const confirmPassword = formData.get( 'confirm-password' ).trim();
        const mobileNumber = formData.get( 'mobileNumber' ).trim();
        const height = formData.get( 'height' ).trim();
        const weight = formData.get( 'weight' ).trim();
        const bloodGroup = formData.get( 'bloodGroup' ).trim();
        const age = formData.get( 'age' ).trim();
        const address = formData.get( 'address' ).trim();

        const errors = [];
        if ( isEmpty( name ) || !isValidName( name ) )
        {
            toast.error( 'Enter valid name' );
            errors.push( 'Name is invalid' )
        }
        if ( isEmpty( email ) || !isValidEmail( email ) )
        {
            toast.error( 'Enter valid email' )
            errors.push( 'Email is invalid' )
        }
        if ( isEmpty( password ) || !isValidPassword( password ) )
        {
            toast.error( 'Enter valid password with uppercase and lowercase letter, one numeric and one special character' );
            errors.push( 'Password invalid' )
        }
        if ( !passwordMatches( password, confirmPassword ) )
        {
            toast.error( 'Password does not match' )
            errors.push( 'confirm Password invalid' )
        }
        if ( !isEmpty( mobileNumber ) && !isValidMobileNumber( mobileNumber ) )
        {
            toast.error( 'Enter proper mobile number' );
            errors.push( 'Mobile number is invalid' )
        }
        if ( !isEmpty( height ) && !isValidHeightWeight( height ) )
        {
            toast.error( 'Enter valid height' )
            errors.push( 'Invalid Height' )
        }
        if ( !isEmpty( weight ) && !isValidHeightWeight( weight ) )
        {
            toast.error( 'Enter valid weight' );
            errors.push( 'Invalid weight' )
        }
        if ( !isEmpty( age ) && !isValidAge( age ) )
        {
            toast.error( 'Enter valid age' )
            errors.push( 'Invalid age' )
        }

        if ( errors.length > 0 )
        {
            return { errors: errors, enteredValues: { name, email, mobileNumber, height, weight, age, bloodGroup, address } }
        }

        dispatch( register( { name, email, password, mobileNumber, height, weight, age, bloodGroup, address } ) )
        navigate( '/' )
    }

    const [formState, formAction] = useActionState( signupHandler, { errors: null } );
    return (
        <Modal modalHeading='Edit Profile' closeModal={ closeModal }>
            <form action={ formAction }>
                <TextInput field='name' type='text' label='* Please enter your name' placeholder=' ' defaultValue={ formState.enteredValues?.name || ' ' } />
                <div className="flex gap-2">
                    <TextInput field='mobileNumber' label='Enter Contact number' type='text' placeholder=' ' defaultValue={ formState.enteredValues?.mobileNumber } />
                    <TextInput field='email' label='*Please enter your Email' type='email' placeholder=' ' defaultValue={ formState.enteredValues?.email } />
                </div>
                <div className="flex gap-2">
                    <TextInput field='password' label='*Please enter Password' type='password' />
                    <TextInput field='confirm-password' label='*Confirm Password' type='password' />
                </div>
                <div className="flex gap-2">
                    <TextInput field='height' label='Enter your Height' type='text' placeholder=' ' defaultValue={ formState.enteredValues?.height } />
                    <TextInput field='weight' label='Enter your Weight' type='text' placeholder=' ' defaultValue={ formState.enteredValues?.weight } />
                </div>
                <div className="flex gap-2">
                    <TextInput field='bloodGroup' label='Enter blood group' type='text' placeholder=' ' defaultValue={ formState.enteredValues?.bloodGroup } />
                    <TextInput field='age' label='Please enter your Age' type='text' placeholder=' ' defaultValue={ formState.enteredValues?.age } />
                </div>
                <TextAreaInput label='Please Enter Your Address' field='address' value=' ' />
                <button className='bg-secondary text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-secondary hover:bg-primary hover:text-secondary duration-300'>Signup Now</button>
                <p><Link to='/'> Back</Link></p>
            </form>
        </Modal>
    )
}

export default Signup
