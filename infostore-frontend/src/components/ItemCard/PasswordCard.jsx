import React, { Fragment, useState } from 'react'
import Button from '../Button/Button'
import EditPassword from '../password/EditPassword';

function PasswordCard( { passwordData } ) {
    const [isEditing, setIsEditing] = useState( false );

    const editHandler = () => {
        setIsEditing( true );
    }

    const closeModal = () => {
        setIsEditing( false )
    }
    return (
        <Fragment>
            { isEditing && <EditPassword closeModal={ closeModal } /> }
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
                    <button className='bg-red-500 text-primary w-[75px] py-1 rounded-md my-2 cursor-pointer border border-red-500 hover:bg-primary hover:text-red-500 duration-300'>Delete</button>
                </div>
            </div>
        </Fragment>
    )
}

export default PasswordCard
