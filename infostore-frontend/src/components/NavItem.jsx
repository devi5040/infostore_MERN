import React, { useState } from 'react'

function NavItem( { children, label } ) {
    const [showNavItems, setShowNavItems] = useState( false );

    const handleNavClick = () => {
        setShowNavItems( prevState => !prevState );
    }
    return (
        <div>
            <h3 className='text-secondary border border-secondary px-12 py-2 cursor-pointer rounded-md hover:bg-secondary hover:text-primary duration-300' onClick={ handleNavClick } aria-expanded={ showNavItems } aria-controls='nav-items'>{ label }</h3>
            <ul className={ `${ showNavItems ? 'my-5 ml-5 space-y-3 text-secondary transition-all duration-500 max-h-40 overflow-hidden' : 'max-h-0 overflow-hidden' }` } id='nav-items'>
                { children }
            </ul>
        </div>
    )
}

export default NavItem
