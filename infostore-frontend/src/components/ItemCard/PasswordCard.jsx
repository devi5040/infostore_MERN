import React, { Fragment, useState } from 'react'
import Button from '../Button/Button'
import EditPassword from '../password/EditPassword';
import { useDispatch } from 'react-redux';
import { deletePasswords, getPasswordStore } from '../../store/actions/passwordStoreActions';

function PasswordCard( { passwordData } ) {
    const [isEditing, setIsEditing] = useState( false );
    const dispatch = useDispatch();

    const editHandler = () => {
        setIsEditing( true );
    }

    const closeModal = () => {
        setIsEditing( false )
        dispatch( getPasswordStore() )
    }

    const passwordDeleteHandler = async () => {
        await dispatch( deletePasswords( passwordData._id ) )
        dispatch( getPasswordStore() )
    }
    return (
        <Fragment>
            { isEditing && <EditPassword closeModal={ closeModal } passwordId={ passwordData._id } /> }
            <div className='shadow-md border border-gray-300 px-10 py-14 rounded-md text-secondary'>
                <h2 className='text-lg font-semibold text-center my-2'>Password Store</h2>
                <div className='flex gap-2 my-2'>
                    <h3 className='text-md font-semibold'>Platform: </h3>
                    <p>{ passwordData.platform }</p>
                </div>
                <div className='flex gap-2 my-2'>
                    <h3 className='text-md font-semibold'>Username: </h3>
                    <p>{ passwordData.username }</p>
                </div>
                <div className='flex gap-2 my-2'>
                    <h3 className='text-md font-semibold'>Email: </h3>
                    <p>{ passwordData.email }</p>
                </div>
                <div className='flex gap-2 my-2'>
                    <h3 className='text-md font-semibold'>Password: </h3>
                    <p>{ passwordData.password }</p>
                </div>
                <div className='flex justify-between'>
                    <Button onClickButton={ editHandler } >Edit</Button>
                    <button className='bg-red-500 text-primary w-[75px] py-1 rounded-md my-2 cursor-pointer border border-red-500 hover:bg-primary hover:text-red-500 duration-300' onClick={ passwordDeleteHandler }>Delete</button>
                </div>
            </div>
        </Fragment>
    )
}

export default PasswordCard
