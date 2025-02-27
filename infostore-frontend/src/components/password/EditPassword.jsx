import React, { useActionState } from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'
import { useDispatch, useSelector } from 'react-redux'
import { editPasswords } from '../../store/actions/passwordStoreActions';
import { toast } from 'react-toastify';
import { isEmpty } from '../../util/validation';

function EditPassword( { closeModal, passwordId } ) {
    let passwordData = useSelector( state => state.passwordStore.passwordStore );
    passwordData = passwordData.filter( password => password._id === passwordId );
    const dispatch = useDispatch()

    const editPasswordAction = async ( prevFormState, formData ) => {
        const platform = formData.get( 'platform' )
        const email = formData.get( 'email' )
        const username = formData.get( 'username' )
        const password = formData.get( 'password' )

        const errors = []
        if ( isEmpty( platform ) )
        {
            toast.error( 'Enter Platform' )
            errors.push( 'Invalid platform' )
        }
        if ( isEmpty( password ) )
        {
            toast.error( 'Enter Password' )
            errors.push( 'Invalid password' )
        }
        if ( errors.length > 0 )
        {
            return { enteredValue: { platform, password } }
        }
        await dispatch( editPasswords( { passwordId, platform, username, email, password } ) );
        closeModal();
    }

    const [formState, formAction] = useActionState( editPasswordAction, { errors: null } )

    return (
        <Modal modalHeading='Add Password to the Store' closeModal={ closeModal }>
            <form action={ formAction }>
                <TextInput label='Please Enter Platform' field='platform' type='text' placeholder=' ' defaultValue={ passwordData[0]?.platform } />
                <TextInput label='Please Enter Email' field='email' type='email' placeholder=' ' defaultValue={ passwordData[0]?.email } />
                <TextInput label='Please Enter Username' field='username' type='text' placeholder=' ' defaultValue={ passwordData[0]?.username } />
                <TextInput label='Please Enter Password' field='password' type='text' placeholder=' ' defaultValue={ passwordData[0]?.password } />
                <div className='flex justify-between'>
                    <button className='bg-secondary text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-secondary hover:bg-primary hover:text-secondary duration-300'>Update</button>
                    <button onClick={ closeModal } className='bg-red-500 text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-red-500 hover:bg-primary hover:text-red-500 duration-300'>Close</button>
                </div>
            </form>
        </Modal>
    )
}

export default EditPassword
