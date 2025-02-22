import React, { Fragment } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <Fragment>
            <Header />
            <div className='absolute top-30 left-100 m-10 w-[65%]'>
                <Outlet />
            </div>
        </Fragment>
    )
}

export default RootLayout
