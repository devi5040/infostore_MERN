import React, { useState } from 'react'

function NavItem( { children, label, iconClass } ) {
    return (
        <div>
            <h3 className='text-secondary border border-secondary px-12 py-2 cursor-pointer rounded-md hover:bg-secondary hover:text-primary duration-300'> <i className={ `bi bi-${ iconClass }` }></i> { label }</h3>
            <ul className='my-2 ml-5 space-y-3 text-secondary transition-all duration-500 max-h-40 overflow-hidden' id='nav-items'>
                { children }
            </ul>
        </div>
    )
}

export default NavItem
