import React from 'react'
import Modal from '../modal/Modal'

function ChangePassword() {
    return (
        <Modal modalHeading='Change Password'>
            <form action="" >
                <TextInput label='Enter new Password' field='password' type='password' placeholder=' ' required />
                <button type="submit" className='w-full py-2 bg-secondary text-primary rounded-md shadow border border-secondary cursor-pointer hover:bg-white hover:text-secondary' >Update Password</button>
            </form>
        </Modal>
    )
}

export default ChangePassword
