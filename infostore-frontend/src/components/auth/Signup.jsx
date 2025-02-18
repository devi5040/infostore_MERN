import React from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'
import TextAreaInput from '../Form-input/TextAreaInput'

function Signup( { closeModal } ) {
    return (
        <Modal modalHeading='Edit Profile' closeModal={ closeModal }>
            <form action="">
                <TextInput field='name' type='text' label='Please enter your name' placeholder=' ' required />
                <div className="flex gap-2">
                    <TextInput field='mobileNumber' label='Enter Contact number' type='text' placeholder=' ' />
                    <TextInput field='email' label='Please enter your Email' type='email' placeholder=' ' required />
                </div>
                <div className="flex gap-2">
                    <TextInput field='password' label='Please enter Password' type='password' />
                    <TextInput field='confirm-password' label='Confirm Password' type='password' />
                </div>
                <div className="flex gap-2">
                    <TextInput field='height' label='Enter your Height' type='text' placeholder=' ' />
                    <TextInput field='weight' label='Enter your Weight' type='text' placeholder=' ' />
                </div>
                <div className="flex gap-2">
                    <TextInput field='bloodGroup' label='Enter blood group' type='text' placeholder=' ' />
                    <TextInput field='age' label='Please enter your Age' type='text' placeholder=' ' />
                </div>
                <TextAreaInput label='Please Enter Your Address' field='address' value='-' />
                <div className='flex justify-between'>
                    <button className='bg-secondary text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-secondary hover:bg-primary hover:text-secondary duration-300'>Signup Now</button>
                    <button onClick={ closeModal } className='bg-red-500 text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-red-500 hover:bg-primary hover:text-red-500 duration-300'>Close</button>
                </div>
            </form>
        </Modal>
    )
}

export default Signup
