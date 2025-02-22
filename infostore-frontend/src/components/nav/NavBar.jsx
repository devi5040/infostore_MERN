import React from 'react'
import NavItem from './NavItem';

function NavBar() {
    return (
        <div className='absolute left-35 top-30 flex flex-col gap-3'>
            <NavItem label='Documents' iconClass='file-earmark' navPath='documents' />
            <NavItem label='Education Details' iconClass='book' navPath='education' />
            <NavItem label='Password Store' iconClass='lock' navPath='password-store' />
            <NavItem label='Profile' iconClass='person' navPath='profile' />
        </div>
    )
}

export default NavBar
