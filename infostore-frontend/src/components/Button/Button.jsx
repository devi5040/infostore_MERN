import React from 'react'

function Button( { children, onClickButton } ) {

    return (
        <div className='flex justify-center items-center'>
            <button className='w-[75px] py-1 bg-tertiary rounded-sm text-md font-semibold text-primary cursor-pointer hover:bg-primary hover:text-tertiary duration-300 border border-tertiary' onClick={ onClickButton }>{ children }</button>
        </div>
    )
}

export default Button
