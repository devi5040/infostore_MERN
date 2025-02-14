import React from 'react'
import NavItem from './NavItem';

function NavBar() {
    return (
        <div className='absolute left-35 top-30 space-y-4'>
            <NavItem label='Documents'>
                <li className='cursor-pointer border border-secondary p-2 rounded-sm'>Add documents</li>
                <li className='cursor-pointer border border-secondary p-2 rounded-sm'>Delete documents</li>
            </NavItem>
            <NavItem label='Profile'>
                <li className='cursor-pointer border border-secondary p-2 rounded-sm'>Edit Profile</li>
            </NavItem>
        </div>
    )
}

export default NavBar
