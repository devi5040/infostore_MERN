import React, { Fragment, use, useDebugValue } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/actions/authActions'
import Error from './Error'

function RootLayout() {
    const error = useSelector( state => state.error )
    const expireTime = useSelector( state => state.auth.expireTime ) || 0;
    const dispatch = useDispatch();
    if ( Date.now() >= expireTime && expireTime !== null )
    {
        dispatch( logout() )
    }
    return (
        <Fragment>
            { error && <Error /> }
            { !error && <><ToastContainer position='top-right' autoClose={ 2000 } />
                <Header />
                <div className='absolute top-30 left-100 m-10 w-[65%]'>
                    <Outlet />
                </div></> }
        </Fragment>
    )
}

export default RootLayout
