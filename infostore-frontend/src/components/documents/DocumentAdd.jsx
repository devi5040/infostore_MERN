import React, { useActionState } from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'
import FileInput from '../Form-input/FileInput'
import { useDispatch } from 'react-redux'
import { isEmpty, isValidName } from '../../util/validation'
import { toast } from 'react-toastify'
import { addDocument } from '../../store/actions/documentsAction'

function DocumentAdd( { closeModal } ) {
    const dispatch = useDispatch();

    const uploadDocumentAction = async ( prevFormState, formData ) => {
        const title = formData.get( 'title' );
        const file = formData.get( 'file' );

        const errors = [];
        if ( isEmpty( title ) || !isValidName( title ) )
        {
            toast.error( 'Enter valid title' );
            errors.push( 'Invalid title' )
        }
        if ( errors.length > 0 )
        {
            return { enteredValue: { title } }
        }
        await dispatch( addDocument( { title, file } ) );
        closeModal();
    }
    const [formState, formAction] = useActionState( uploadDocumentAction, { errors: null } )
    return (
        <Modal closeModal={ closeModal } modalHeading='Add Document'>
            <form action={ formAction }>
                <TextInput field='title' type='text' placeholder=' ' label='Document Title' defaultValue={ formState?.enteredValue?.title } />
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
