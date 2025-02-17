import React from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'
import FileInput from '../Form-input/FileInput'

function DocumentAdd( { closeModal } ) {
    return (
        <Modal closeModal={ closeModal } modalHeading='Add Document'>
            <form action="">
                <TextInput field='title' type='text' placeholder=' ' label='Document Title' />
                <FileInput label="Upload Document Image" />
                <div className='flex justify-between'>
                    <button className='bg-secondary text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-secondary hover:bg-primary hover:text-secondary duration-300'>Submit</button>
                    <button onClick={ closeModal } className='bg-red-500 text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-red-500 hover:bg-primary hover:text-red-500 duration-300'>Close</button>
                </div>
            </form>
        </Modal>
    )
}

export default DocumentAdd
