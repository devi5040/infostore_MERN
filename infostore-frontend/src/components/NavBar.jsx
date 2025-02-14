import React from 'react'
import NavItem from './NavItem';

function NavBar() {
    return (
        <div className='absolute left-35 top-30 space-y-4'>
            <NavItem label='Documents' iconClass='file-earmark'>
                <li className='cursor-pointer border border-secondary p-2 rounded-sm hover:bg-secondary hover:text-primary duration-300'>Add documents</li>
            </NavItem>
            <NavItem label='Education Details' iconClass='book'>
                <li className='cursor-pointer border border-secondary p-2 rounded-sm hover:bg-secondary hover:text-primary duration-300'>Add Education details</li>
                <li className='cursor-pointer border border-secondary p-2 rounded-sm hover:bg-secondary hover:text-primary duration-300'>Edit Education details</li>
            </NavItem>
            <NavItem label='Password Store' iconClass='lock'>
                <li className='cursor-pointer border border-secondary p-2 rounded-sm hover:bg-secondary hover:text-primary duration-300'>Add Password</li>
                <li className='cursor-pointer border border-secondary p-2 rounded-sm hover:bg-secondary hover:text-primary duration-300'>Edit Password</li>
            </NavItem>
            <NavItem label='Profile' iconClass='person'>
                <li className='cursor-pointer border border-secondary p-2 rounded-sm hover:bg-secondary hover:text-primary duration-300'>Edit Profile</li>
            </NavItem>
        </div>
    )
}

export default NavBar
