import React from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'
import TextAreaInput from '../Form-input/TextAreaInput'

function EducationAdd( { closeModalHandler } ) {
    return (
        <Modal closeModal={ closeModalHandler } modalHeading='Add Education Details'>
            <form action="">
                <TextInput label='Enter Your Educational Level' field='level' type="text" required placeholder=" " />
                <TextInput label='Enter Your Institute Name' field='institute' type="text" required placeholder=" " />
                <TextInput label='Enter Your Marks(Percentage)' field='marks' type="number" required placeholder=" " />
                <TextAreaInput label='Enter Your Achievements' field='achievements' />
                <TextAreaInput label='Enter Other Details' field='other-details' />
                <div className='flex justify-between'>
                    <button className='bg-secondary text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-secondary hover:bg-primary hover:text-secondary duration-300'>Submit</button>
                    <button onClick={ closeModalHandler } className='bg-red-500 text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-red-500 hover:bg-primary hover:text-red-500 duration-300'>Close</button>
                </div>
            </form>

        </Modal>
    )
}

export default EducationAdd
