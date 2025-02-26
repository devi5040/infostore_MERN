import React, { useActionState } from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'
import TextAreaInput from '../Form-input/TextAreaInput'
import { useDispatch, useSelector } from 'react-redux'
import { editEducation } from '../../store/actions/educatioActions'
import { isEmpty, isValidAge } from '../../util/validation'
import { toast } from 'react-toastify'

function EditEducation( { closeModalHandler, educationId } ) {
    const educationDetails = useSelector( state => state.education.educationDetails );
    const education = educationDetails.filter( education => education._id === educationId );
    console.log( education )
    const dispatch = useDispatch();
    const editEducationAction = async ( prevFormState, formData ) => {
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
        if ( isEmpty( marks ) )
        {
            toast.error( 'Enter valid marks' )
            errors.push( 'Invalid marks' )
        }
        if ( errors.length > 0 )
        {
            return { errors };
        }
        await dispatch( editEducation( { educationId, level, institute, marks, achievements, otherDetails } ) );
        closeModalHandler();
    }
    const [formState, formAction] = useActionState( editEducationAction, { errors: null } )
    return (
        <Modal closeModal={ closeModalHandler } modalHeading='Add Education Details'>
            <form action={ formAction }>
                <TextInput label='Enter Your Educational Level' field='level' type="text" required placeholder=" " defaultValue={ education[0]?.education } />
                <TextInput label='Enter Your Institute Name' field='institute' type="text" required placeholder=" " defaultValue={ education[0]?.institute } />
                <TextInput label='Enter Your Marks(Percentage)' field='marks' type="number" required placeholder=" " defaultValue={ education[0]?.marks } />
                <TextAreaInput label='Enter Your Achievements' field='achievements' value={ education[0]?.achievements } />
                <TextAreaInput label='Enter Other Details' field='other-details' value={ education[0]?.otherDetails } />
                <div className='flex justify-between'>
                    <button className='bg-secondary text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-secondary hover:bg-primary hover:text-secondary duration-300'>Update</button>
                    <button onClick={ closeModalHandler } className='bg-red-500 text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-red-500 hover:bg-primary hover:text-red-500 duration-300'>Close</button>
                </div>
            </form>
        </Modal>
    )
}

export default EditEducation
