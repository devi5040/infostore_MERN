import React, { useActionState, useState } from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'
import { isEmpty, isValidEmail } from '../../util/validation';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { receiveOtp, verifyOtp } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom'

let userEmail;

function ForgotPassword( { closeModal } ) {
    const navigate = useNavigate();
    const [isOtpSent, setIsOtpSent] = useState( false );
    const dispatch = useDispatch()

    const otpHandlingAction = async ( prevFormState, formData ) => {
        const email = formData.get( 'email' );
        const errors = []
        if ( isEmpty( email ) || !isValidEmail( email ) )
        {
            toast.error( 'Email is Invalid' );
            errors.push( 'Invalid email' )
        }
        if ( errors.length > 0 )
        {
            return { enteredValue: { email } };
        }
        userEmail = email;
        await dispatch( receiveOtp( email ) )
        setIsOtpSent( true );
    }

    const otpVerificationAction = async ( prevFormState, formData ) => {
        const otp = formData.get( 'otp' ).trim();
        await dispatch( verifyOtp( { userEmail, otp } ) );
        navigate( '/change-password' )
    }

    const [otpSendFormState, otpSendFormAction] = useActionState( otpHandlingAction, { errors: null } );
    const [otpVerifyFormState, otpVerifyFormAction] = useActionState( otpVerificationAction )

    return (
        <Modal closeModal={ closeModal } modalHeading='Change Your Password'>
            <form action={ otpSendFormAction } className={ `${ !isOtpSent ? 'h-[280px]' : 'my-10' }` }>
                <TextInput label='Enter your Email ID to receive OTP' type='email' field='email' placeholder=' ' required defaultValue={ userEmail ? userEmail : '' } />
                <button type="submit" className='w-full py-2 bg-secondary text-primary rounded-md shadow border border-secondary cursor-pointer hover:bg-white hover:text-secondary' >Get OTP</button>
            </form>
            { isOtpSent && <form action={ otpVerifyFormAction }>
                <TextInput label='Enter the OTP' field='otp' placeholder=' ' required />
                <button type="submit" className='w-full py-2 bg-secondary text-primary rounded-md shadow border border-secondary cursor-pointer hover:bg-white hover:text-secondary'>Verify OTP</button>
            </form> }
        </Modal>
    )
}

export default ForgotPassword
