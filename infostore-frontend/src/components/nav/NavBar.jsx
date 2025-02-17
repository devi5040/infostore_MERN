import React from 'react'
import NavItem from './NavItem';

function NavBar() {
    return (
        <div className='absolute left-35 top-30'>
            <NavItem label='Documents' iconClass='file-earmark' />
            <NavItem label='Education Details' iconClass='book' />
            <NavItem label='Password Store' iconClass='lock' />
            <NavItem label='Profile' iconClass='person' />
        </div>
    )
}

export default NavBar
