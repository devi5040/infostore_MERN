import React from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'

function Login( { closeModal } ) {
    return (
        <Modal modalHeading='Login' closeModal={ closeModal }>
            <form action="">
                <TextInput field='email' type='email' label='Enter your email' placeholder=' ' required />
                <TextInput field='password' type='password' label='Enter your Password' placeholder=' ' required />
                <button type="submit" className='my-2 bg-secondary text-primary w-full py-2 rounded-md hover:text-secondary hover:bg-primary border border-secondary cursor-pointer'>Login</button>
                <h3 className='my-2 text-md font-semibold'>Don't have an account? Go to <span className="cursor-pointer">Signup</span></h3>
                <h3 className='my-2 text-md font-semibold'>Don't know your Password? Go to <span className="cursor-pointer">Forgot Password</span></h3>
            </form>
        </Modal>
    )
}

export default Login
