import React, { useActionState } from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'
import TextAreaInput from '../Form-input/TextAreaInput'
import { useDispatch } from 'react-redux';
import { isEmpty, isValidAge } from '../../util/validation';
import { toast } from 'react-toastify';
import { addEducation } from '../../store/actions/educatioActions';

function EducationAdd( { closeModalHandler } ) {
    const dispatch = useDispatch();
    const addEducationAction = async ( prevFormState, formData ) => {
        const level = formData.get( 'level' );
        const institute = formData.get( 'institute' );
        const marks = formData.get( 'marks' );
        const achievements = formData.get( 'achievements' )
        const otherDetails = formData.get( 'other-details' );

        const errors = []
        if ( isEmpty( level ) )
        {
            toast.error( 'Enter valid education level' )
            errors.push( 'Invalid education level' )
        }
        if ( isEmpty( institute ) )
        {
            toast.error( 'Enter valid institute name' )
            errors.push( 'Invalid institute' )
        }
        if ( isEmpty( marks ) || !isValidAge( marks ) )
        {
            toast.error( 'Enter valid marks' )
            errors.push( 'Invalid marks' )
        }
        if ( errors.length > 0 )
        {
            return { enteredValues: { level, institute, marks } }
        }
        await dispatch( addEducation( { level, institute, marks, achievements, otherDetails } ) );
        closeModalHandler();
    }

    const [formState, formAction] = useActionState( addEducationAction, { errors: null } )
    return (
        <Modal closeModal={ closeModalHandler } modalHeading='Add Education Details'>
            <form action={ formAction }>
                <TextInput label='Enter Your Educational Level' field='level' type="text" required placeholder=" " defaultValue={ formState.enteredValues?.level } />
                <TextInput label='Enter Your Institute Name' field='institute' type="text" required placeholder=" " defaultValue={ formState.enteredValues?.institute } />
                <TextInput label='Enter Your Marks(Percentage)' field='marks' type="number" required placeholder=" " defaultValue={ formState.enteredValues?.marks } />
                <TextAreaInput label='Enter Your Achievements' field='achievements' />
                <TextAreaInput label='Enter Other Details' field='other-details' />
                <div className='flex justify-between'>
                    <button type='submit' className='bg-secondary text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-secondary hover:bg-primary hover:text-secondary duration-300'>Submit</button>
                    <button onClick={ closeModalHandler } className='bg-red-500 text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-red-500 hover:bg-primary hover:text-red-500 duration-300'>Close</button>
                </div>
            </form>
        </Modal>
    )
}

export default EducationAdd
