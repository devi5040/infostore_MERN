import React, { useState } from 'react'
import userIcon from '../assets/user-icon.svg'
import NavBar from './nav/NavBar'
import Login from './auth/Login';

function Header() {
    const [loginModalOpen, setLoginModalOpen] = useState( false );

    const loginBtnClick = () => {
        setLoginModalOpen( true );
    }

    const closeModal = () => {
        setLoginModalOpen( false )
    }
    return (
        <>
            { loginModalOpen && <Login closeModal={ closeModal } /> }
            <header className='px-24 m-10 flex justify-between items-center'>
                <a className='text-4xl font-bold uppercase text-secondary' href="#">Infostore</a>
                <div className='flex justify-center items-center gap-4 w-full'>
                    <img className='w-[50px]' src={ userIcon } alt="user-icon" />
                    <h2 className='text-xl text-secondary font-semibold'>Hello User, Welcome!</h2>
                </div>
                <div>
                    <button className='w-[150px] cursor-pointer border py-2 rounded-xl text-md font-semibold bg-tertiary text-primary hover:text-tertiary hover:bg-primary hover:border-tertiary duration-300' onClick={ loginBtnClick }>Login</button>
                </div>
            </header>
            <NavBar />
        </>
    )
}

export default Header