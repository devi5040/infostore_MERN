import React, { useActionState } from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'
import { useDispatch } from 'react-redux'
import { isEmpty } from '../../util/validation'
import { toast } from 'react-toastify'
import { addPasswords } from '../../store/actions/passwordStoreActions'
import Error from '../../pages/Error'
import { setError } from '../../store/slices/errorSlice'

function AddPassword( { closeModal } ) {
    const dispatch = useDispatch();
    const addPasswordAction = async ( prevFormState, formData ) => {
        const platform = formData.get( 'platform' )
        const email = formData.get( 'email' )
        const username = formData.get( 'username' )
        const password = formData.get( 'password' );

        const errors = [];
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
        await dispatch( addPasswords( { platform, email, username, password } ) );
        closeModal();
    }

    const [formState, formAction] = useActionState( addPasswordAction, { errors: null } )
    return (
        <Modal modalHeading='Add Password to the Store' closeModal={ closeModal }>
            <form action={ formAction }>
                <TextInput label='Please Enter Platform' field='platform' type='text' placeholder=' ' />
                <TextInput label='Please Enter Email' field='email' type='email' placeholder=' ' />
                <TextInput label='Please Enter Username' field='username' type='text' placeholder=' ' />
                <TextInput label='Please Enter Password' field='password' type='text' placeholder=' ' />
                <div className='flex justify-between'>
                    <button type='submit' className='bg-secondary text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-secondary hover:bg-primary hover:text-secondary duration-300'>Add Now</button>
                    <button onClick={ closeModal } className='bg-red-500 text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-red-500 hover:bg-primary hover:text-red-500 duration-300'>Close</button>
                </div>
            </form>
        </Modal>
    )
}

export default AddPassword
