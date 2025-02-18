import React, { Fragment, useState } from 'react'
import Button from '../Button/Button';
import EditEducation from '../education/EditEducation';

function EducationCard( { education } ) {
    const [isEditing, setIsEditing] = useState( false );

    const editButtonHandler = () => {
        setIsEditing( true );
    }

    const closeModal = () => {
        setIsEditing( false )
    }

    return (
        <Fragment>
            { isEditing && <EditEducation closeModalHandler={ closeModal } /> }
            <div className='border border-gray-300 shadow-md rounded-md p-10 text-secondary'>
                <h2 className='text-center font-bold text-xl'>{ education.education }</h2>
                <div className='flex flex-col space-y-2'>
                    <div className='flex items-center'>
                        <h3 className='text-lg font-semibold'>Institue Name:</h3>
                        <p className=' mx-2'>{ education.institute }</p>
                    </div>
                    <div className='flex items-center'>
                        <h3 className='text-lg font-semibold'>Marks:</h3>
                        <p className='mx-2'>{ education.marks }%</p>
                    </div>
                    <div className='flex items-center'>
                        <h3 className='text-lg font-semibold'>Achievements:</h3>
                        <p className='mx-2'>{ education.achievements }</p>
                    </div>
                    <div className='flex items-center'>
                        <h3 className='text-lg font-semibold'>Other Details:</h3>
                        <p className='mx-2'>{ education.otherDetails }</p>
                    </div>
                    <div className='flex justify-between'>
                        <Button onClickButton={ editButtonHandler }>Edit</Button>
                        <button className='bg-red-500 text-primary w-[75px] py-1 rounded-md my-2 cursor-pointer border border-red-500 hover:bg-primary hover:text-red-500 duration-300'>Delete</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EducationCard
