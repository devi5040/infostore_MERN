import React, { useState } from 'react'

function Button( { btnCaption, isEditing } ) {

    const clickHandler = () => {
        isEditing( true );
    }

    return (
        <div className='flex justify-center items-center'>
            <button className='w-[150px] py-1 bg-tertiary rounded-sm text-md font-semibold text-primary cursor-pointer hover:bg-primary hover:text-tertiary duration-300 border border-tertiary' onClick={ clickHandler }>{ btnCaption }</button>
        </div>
    )
}

export default Button
