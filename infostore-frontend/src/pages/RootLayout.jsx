import React, { Fragment } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

function RootLayout() {
    return (
        <Fragment>
            <ToastContainer position='top-right' autoClose={ 2000 } />
            <Header />
            <div className='absolute top-30 left-100 m-10 w-[65%]'>
                <Outlet />
            </div>
        </Fragment>
    )
}

export default RootLayout
