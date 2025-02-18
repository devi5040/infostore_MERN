import React, { useState } from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'

function ForgotPassword( { closeModal } ) {
    const [isOtpSent, setIsOtpSent] = useState( false );

    const getOtpHandler = () => {
        setIsOtpSent( true )
    }
    return (
        <Modal closeModal={ closeModal } modalHeading='Change Your Password'>
            <form action="" className={ `${ !isOtpSent ? 'h-[280px]' : 'my-10' }` }>
                <TextInput label='Enter your Email ID to receive OTP' type='email' field='email' placeholder=' ' required />
                <button type="submit" className='w-full py-2 bg-secondary text-primary rounded-md shadow border border-secondary cursor-pointer hover:bg-white hover:text-secondary' onClick={ getOtpHandler }>Get OTP</button>
            </form>
            { isOtpSent && <form action="">
                <TextInput label='Enter the OTP' field='otp' placeholder=' ' required />
                <button type="submit" className='w-full py-2 bg-secondary text-primary rounded-md shadow border border-secondary cursor-pointer hover:bg-white hover:text-secondary'>Verify OTP</button>
            </form> }
        </Modal>
    )
}

export default ForgotPassword
