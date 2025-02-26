import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function AddItemButton( { btnCaption, isEditing } ) {
    const isLoggedIn = useSelector( state => state.auth.isLoggedIn )
    const clickHandler = () => {
        isEditing( true );
    }

    return (
        <div className='flex justify-center items-center'>
            <button className={ `w-[150px] py-1 bg-tertiary rounded-sm text-md font-semibold text-primary duration-300 border border-tertiary ${ isLoggedIn ? 'cursor-pointer hover:text-tertiary hover:bg-primary' : 'cursor-not-allowed' }` } onClick={ clickHandler }>{ btnCaption }</button>
        </div>
    )
}

export default AddItemButton;
