import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function NavItem( { label, iconClass, navPath } ) {
    return (
        <NavLink className={ ( { isActive } ) => 'text-secondary border border-secondary px-12 py-2 cursor-pointer rounded-md hover:bg-secondary hover:text-primary duration-300' + `${ isActive ? 'bg-secondary text-primary' : 'bg-primary text-secondary' }` } to={ navPath }> <i className={ `bi bi-${ iconClass }` }></i> { label }</NavLink>
    )
}

export default NavItem
