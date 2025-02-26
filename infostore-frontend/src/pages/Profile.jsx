import React, { Fragment, useEffect, useState } from 'react';
import profileImage from '../assets/user-profile.jpg'
import EditProfile from '../components/profile/EditProfile';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../store/actions/profileAction';

function Profile() {
    const isLoggedIn = useSelector( state => state.auth.isLoggedIn );
    const profile = useSelector( state => state.profile.profileDetails ) || []
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState( false );

    useEffect( () => {
        if ( isLoggedIn )
        {
            dispatch( getProfile() )
        }
    }, [dispatch, isLoggedIn] )

    const openModal = () => {
        setIsEditing( true )
    }

    const closeModal = () => {
        setIsEditing( false );
        dispatch( getProfile() )
    }

    return (
        <Fragment>
            { isEditing && <EditProfile closeModal={ closeModal } /> }
            <div className="flex justify-center"><button disabled={ !isLoggedIn } className={ `w-[150px] py-2 bg-tertiary border border-tertiary mb-3 text-primary rounded-md ${ isLoggedIn ? 'cursor-pointer hover:text-tertiary hover:bg-primary' : 'cursor-not-allowed' } ` } onClick={ openModal }>Edit Profile</button></div>
            <div className='grid grid-cols-5 gap-10 text-secondary'>
                <div className='h-[440px] col-span-2 border p-5 shadow-lg rounded-md border-gray-300'>
                    <img className='h-[280px] w-full object-contain' src={ !isLoggedIn ? profileImage : profile?.profileImage } alt="userName" />
                    <div className='my-5'>
                        <div className='flex gap-2'>
                            <h3 className='font-semibold text-md'>Name: </h3>
                            <p>{ profile ? profile?.name : '-' }</p>
                        </div>
                        <div className='flex gap-2'>
                            <h3 className='font-semibold text-md'>Email: </h3>
                            <p>{ profile ? profile?.email : '-' }</p>
                        </div>
                        <div className='flex gap-2'>
                            <h3 className='font-semibold text-md'>Contact Number: </h3>
                            <p>{ profile ? profile?.mobileNumber : '-' }</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-10 col-span-2 mx-5'>
                    <div className='border border-gray-300 h-[200px] rounded-lg shadow-lg'>
                        <div className=' flex flex-col justify-center'>
                            <div className='m-2 p-2 border-b'>
                                <h3 className='font-semibold text-md'>Address</h3>
                                <p>{ profile ? profile?.address : '-' }</p>
                            </div>
                            <div className='m-2 p-2 flex gap-2'>
                                <h3 className='font-semibold text-md'>Age: </h3>
                                <p>{ profile ? profile?.age : '-' }</p>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 h-[200px] rounded-lg shadow-lg'>
                        <div className='flex flex-col gap-2 my-5'>
                            <div className='m-2 px-2 flex gap-2'>
                                <h3 className='font-semibold text-md'>Weight:</h3>
                                <p>{ profile ? profile?.weight : '-' }</p>
                            </div>
                            <div className='m-2 px-2 flex gap-2'>
                                <h3 className='font-semibold text-md'>Height: </h3>
                                <p>{ profile ? profile?.height : '-' }</p>
                            </div>
                            <div className='m-2 px-2 flex gap-2'>
                                <h3 className='font-semibold text-md'>Blood Group: </h3>
                                <p>{ profile ? profile?.bloodGroup : '-' }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Profile
