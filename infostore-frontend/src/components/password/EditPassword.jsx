import React from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'

function EditPassword( { closeModal } ) {
    return (
        <Modal modalHeading='Add Password to the Store' closeModal={ closeModal }>
            <form action="">
                <TextInput label='Please Enter Platform' field='platform' type='text' placeholder=' ' required value="-" />
                <TextInput label='Please Enter Email' field='email' type='email' placeholder=' ' value="-" />
                <TextInput label='Please Enter Username' field='username' type='text' placeholder=' ' value="-" />
                <TextInput label='Please Enter Password' field='password' type='text' placeholder=' ' value="-" />
                <div className='flex justify-between'>
                    <button className='bg-secondary text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-secondary hover:bg-primary hover:text-secondary duration-300'>Update</button>
                    <button onClick={ closeModal } className='bg-red-500 text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-red-500 hover:bg-primary hover:text-red-500 duration-300'>Close</button>
                </div>
            </form>
        </Modal>
    )
}

export default EditPassword
