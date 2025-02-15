import React from 'react'

function Modal( { children } ) {
    return (
        <dialog open>
            { children }
            <form method='dialog'>
                <button>Close</button>
            </form>
        </dialog>
    )
}

export default Modal
