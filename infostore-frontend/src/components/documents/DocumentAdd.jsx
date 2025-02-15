import React from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'
import FileInput from '../Form-input/FileInput'

function DocumentAdd( { editingHandler, closeModal } ) {
    return (
        <>
            <Modal editingHandler={ editingHandler } closeModal={ closeModal }>
                <TextInput field='title' type='text' placeholder=' ' label='Document Title' />
                <FileInput label="Upload Document Image" />
            </Modal>
        </>
    )
}

export default DocumentAdd
