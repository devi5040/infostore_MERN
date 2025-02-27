import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function ErrorPage() {
    let error = useRouteError();
    let title = 'An error occured'
    let description = "Some error occured don't worry we will right back in some time"
    let errorStatus = 500;
    if ( error.status && error.status === 404 )
    {
        title = error.statusText;
        description = "We couldn't find the page"
        errorStatus = error.status
    }
    return (
        <div className='flex flex-col justify-center items-center h-[100dvh] gap-5 bg-primary text-secondary'>
            <h1 className='text-8xl font-extrabold '>{ errorStatus }</h1>
            <h2 className='text-4xl font-bold'>{ title }</h2>
            <p className='text-xl font-semibold'>{ description }</p>
            <Link to='..' className='w-[150px] border py-3 rounded-lg shadow-lg bg-secondary text-primary hover:text-secondary hover:bg-primary duration-300 cursor-pointer justify-center flex'>Go back</Link>
        </div>
    )
}

export default ErrorPage
