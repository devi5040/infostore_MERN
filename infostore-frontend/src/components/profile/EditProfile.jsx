import React, { useActionState } from 'react'
import Modal from '../modal/Modal'
import TextInput from '../Form-input/TextInput'
import TextAreaInput from '../Form-input/TextAreaInput'
import { useDispatch, useSelector } from 'react-redux'
import FileInput from '../Form-input/FileInput'
import { isEmpty, isValidAge, isValidHeightWeight, isValidMobileNumber, isValidName } from '../../util/validation'
import { toast } from 'react-toastify'
import { editProfile } from '../../store/actions/profileAction'
import { useNavigate } from 'react-router-dom'

function EditProfile( { closeModal } ) {
    const profileValues = useSelector( state => state.profile.profileDetails );
    const dispatch = useDispatch();

    const editProfileAction = async ( prevFormState, formData ) => {
        const name = formData.get( 'name' );
        const mobileNumber = formData.get( 'mobileNumber' );
        const height = formData.get( 'height' )
        const weight = formData.get( 'weight' )
        const age = formData.get( 'age' )
        const file = formData.get( 'file' )
        const address = formData.get( 'address' );
        const bloodGroup = formData.get( 'bloodGroup' );

        const errors = [];
        if ( isEmpty( name ) || !isValidName( name ) )
        {
            toast.error( 'Enter proper name' );
            errors.push( 'Name is invalid' )
        }
        if ( !isEmpty( mobileNumber ) && !isValidMobileNumber( mobileNumber ) )
        {
            toast.error( 'Enter proper mobile number' )
            errors.push( 'Mobile number is invalid' )
        }
        if ( !isEmpty( height ) && !isValidHeightWeight( height ) )
        {
            toast.error( 'Enter proper height' );
            errors.push( 'Invalid height' )
        }
        if ( !isEmpty( weight ) && !isValidHeightWeight( weight ) )
        {
            toast.error( 'Enter proper weight' )
            errors.push( 'Invalid weight' )
        }
        if ( !isEmpty( age ) && !isValidAge( age ) )
        {
            toast.error( 'Enter valid age' )
            errors.push( 'Invalid Age' )
        }
        if ( errors.length > 0 )
        {
            errors.map( ( error ) => console.log( error ) )
            return;
        }
        await dispatch( editProfile( { name, mobileNumber, height, weight, age, address, file, bloodGroup } ) );
        closeModal();
    }

    const [formState, formAction] = useActionState( editProfileAction, { errors: null } )
    return (
        <Modal modalHeading='Edit Profile' closeModal={ closeModal }>
            <form action={ formAction }>
                <TextInput field='name' type='text' label='Please enter your name' defaultValue={ profileValues?.name ? profileValues.name : '' } placeholder=' ' />
                <TextInput field='mobileNumber' label='Please enter your Contact number' type='text' defaultValue={ profileValues?.mobileNumber ? profileValues.mobileNumber : '' } />
                <div className="flex gap-2">
                    <TextInput field='height' label='Please enter your Height' type='text' defaultValue={ profileValues?.height ? profileValues.height : '' } />
                    <TextInput field='weight' label='Please enter your Weight' type='text' defaultValue={ profileValues?.weight ? profileValues.weight : '' } />
                </div>
                <div className="flex gap-2">
                    <TextInput field='bloodGroup' label='Please enter blood group' defaultValue={ profileValues?.bloodGroup ? profileValues.bloodGroup : '' } type='text' required />
                    <TextInput field='age' label='Please enter your Age' defaultValue={ profileValues?.age ? profileValues.age : '' } type='text' />
                </div>
                <TextAreaInput label='Please Enter Your Address' field='address' value={ profileValues?.address ? profileValues.address : '' } />
                <FileInput label='Upload profile picture' imageUrl={ profileValues?.profileImage } />
                <div className='flex justify-between'>
                    <button className='bg-secondary text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-secondary hover:bg-primary hover:text-secondary duration-300'>Update</button>
                    <button onClick={ closeModal } className='bg-red-500 text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-red-500 hover:bg-primary hover:text-red-500 duration-300'>Close</button>
                </div>
            </form>
        </Modal>
    )
}

export default EditProfile
