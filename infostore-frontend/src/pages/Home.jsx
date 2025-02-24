import React, { Fragment, useEffect } from 'react';
import Quotes from '../components/Quotes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDocumentCount, fetchPasswordCount, fetchProfileCompletion } from '../store/actions/homeInfoAction';

function Home() {
    const isLoggedIn = useSelector( state => state.auth.isLoggedIn )
    const documentCount = useSelector( state => state.homeInfo.numberOfDocuments );
    const passwordCount = useSelector( state => state.homeInfo.passwordCount );
    const profileCompletionPercentage = useSelector( state => state.homeInfo.profileCompleted );
    const dispatch = useDispatch();
    console.log( `isLogged In: ${ isLoggedIn }    documentCount:${ documentCount }  passwordCount:${ documentCount } profileCompletionPercentage:${ profileCompletionPercentage }` )

    useEffect( () => {
        if ( isLoggedIn )
        {
            dispatch( fetchDocumentCount() );
            dispatch( fetchPasswordCount() );
            dispatch( fetchProfileCompletion() )
        }
    }, [isLoggedIn] )
    return (
        <Fragment>
            <div className="grid grid-cols-3 gap-10 text-secondary">
                <div className='border border-gray-200 shadow-lg p-10 rounded-md cursor-pointer'>
                    <h3 className='text-lg font-semibold text-center'>Number of documents</h3>
                    <h1 className='text-center text-8xl font-bold'>{ documentCount }</h1>
                </div>
                <div className='border border-gray-200 shadow-lg p-10 rounded-md cursor-pointer'><h3 className='text-lg font-semibold text-center'>Number of Passwords</h3><h1 className='text-center text-8xl font-bold'>{ passwordCount }</h1></div>
                <div className='border border-gray-200 shadow-lg p-10 rounded-md cursor-pointer'><h3 className='text-lg font-semibold text-center'>Profile Completed</h3><h1 className='text-center text-6xl mt-5 font-bold'>{ profileCompletionPercentage }%</h1></div>
                <Quotes />
            </div>
        </Fragment>
    );
}

export default Home;
