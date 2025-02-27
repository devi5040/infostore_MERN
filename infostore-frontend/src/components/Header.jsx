import React, { useEffect, useState } from 'react'
import userIcon from '../assets/user-icon.svg'
import NavBar from './nav/NavBar'
import Login from './auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../store/actions/authActions';
import { getProfile } from '../store/actions/profileAction';

function Header() {
    const [loginModalOpen, setLoginModalOpen] = useState( false );
    const isLoggedIn = useSelector( state => state.auth.isLoggedIn );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginBtnClick = () => {
        setLoginModalOpen( true );
    }
    const userDetails = useSelector( state => state.profile.profileDetails )
    const userName = userDetails?.name || 'guest';
    const profileIconImage = userDetails?.profileImage || userIcon;
    useEffect( () => {
        dispatch( getProfile() )
    }, [dispatch, isLoggedIn] )

    const closeModal = () => {
        setLoginModalOpen( false )
    }

    const logoutHandler = () => {
        try
        {
            dispatch( logout() );
            navigate( '/' )
        } catch ( error )
        {
            console.log( 'error', error )
        }
    }

    return (
        <>
            { loginModalOpen && <Login closeModal={ closeModal } /> }
            <header className='px-24 m-10 flex justify-between items-center'>
                <Link className='text-4xl font-bold uppercase text-secondary' to="/">Infostore</Link>
                <div className='flex justify-center items-center gap-4 w-full'>
                    <img className='w-[50px] rounded-full' src={ profileIconImage } alt="user-icon" />
                    <h2 className='text-xl text-secondary font-semibold'>Hello { userName }, Welcome!</h2>
                </div>
                <div>
                    {
                        isLoggedIn ? <button className='w-[150px] cursor-pointer border py-2 rounded-xl text-md font-semibold bg-tertiary text-primary hover:text-tertiary hover:bg-primary hover:border-tertiary duration-300' onClick={ logoutHandler }>Logout</button> : <button className='w-[150px] cursor-pointer border py-2 rounded-xl text-md font-semibold bg-tertiary text-primary hover:text-tertiary hover:bg-primary hover:border-tertiary duration-300' onClick={ loginBtnClick }>Login</button>
                    }
                </div>
            </header>
            <NavBar />
        </>
    )
}

export default Header