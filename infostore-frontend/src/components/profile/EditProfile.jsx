import React from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'
import TextAreaInput from '../Form-input/TextAreaInput'

function EditProfile( { closeModal } ) {
    return (
        <Modal modalHeading='Edit Profile' closeModal={ closeModal }>
            <form action="">
                <TextInput field='name' type='text' label='Please enter your name' value='devi' placeholder=' ' required />
                <TextInput field='mobileNumber' label='Please enter your Contact number' value='-' type='text' required />
                <div className="flex gap-2">
                    <TextInput field='height' label='Please enter your Height' value='-' type='text' required />
                    <TextInput field='weight' label='Please enter your Weight' value='-' type='text' required />
                </div>
                <div className="flex gap-2">
                    <TextInput field='bloodGroup' label='Please enter blood group' value='-' type='text' required />
                    <TextInput field='age' label='Please enter your Age' value='-' type='text' required />
                </div>
                <TextAreaInput label='Please Enter Your Address' field='address' value='-' />
                <div className='flex justify-between'>
                    <button className='bg-secondary text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-secondary hover:bg-primary hover:text-secondary duration-300'>Update</button>
                    <button onClick={ closeModal } className='bg-red-500 text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-red-500 hover:bg-primary hover:text-red-500 duration-300'>Close</button>
                </div>
            </form>
        </Modal>
    )
}

export default EditProfile
