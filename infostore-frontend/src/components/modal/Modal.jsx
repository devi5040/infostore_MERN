import React from 'react';
import { createPortal } from 'react-dom'

function Modal( { children, closeModal, modalHeading } ) {
    return createPortal(
        <><div className='bg-gray-600 w-full h-screen z-10 absolute top-0 left-0 overflow-hidden' onClick={ closeModal } />
            <dialog open className='z-100 w-[30%] p-10 mx-auto items-center my-6 rounded-sm shadow-md border border-gray-300 shadow-primary'>
                <h3 className='text-xl font-semibold text-secondary text-center my-3'>{ modalHeading }</h3>
                { children }
            </dialog></>, document.getElementById( 'modal' )
    )
}

export default Modal
