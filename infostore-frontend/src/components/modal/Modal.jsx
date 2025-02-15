import React from 'react';
import { createPortal } from 'react-dom'

function Modal( { children, closeModal } ) {
    return createPortal(
        <><div className='bg-gray-600 w-full h-screen z-10 absolute top-0 left-0 overflow-hidden' onClick={ closeModal } />
            <dialog open className='z-100 p-10 mx-auto items-center my-12 rounded-sm shadow-md border border-gray-300 shadow-primary'>
                { children }
                <button onClick={ closeModal } className='bg-red-500 text-primary w-[100px] py-1 rounded-md my-2 cursor-pointer border border-red-500 hover:bg-primary hover:text-red-500 duration-300'>Close</button>
            </dialog></>, document.getElementById( 'modal' )
    )
}

export default Modal
