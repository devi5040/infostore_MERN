import React, { useState } from 'react'
import { convertToBase64 } from '../../util/images'

function FileInput() {
    const [base64, setBase64] = useState( null );

    const imageChangeHandler = ( event ) => {
        convertToBase64( event.target.files[0] ).then( ( result ) => {
            setBase64( result );
        } ).catch( ( error ) => {
            setBase64( null );
        } );
    }


    return (
        <>
            <div className='flex flex-col'>
                <label className="w-full flex flex-col items-center px-4 py-3 bg-white text-gray-400 rounded-lg tracking-wide border border-gray-300 cursor-pointer hover:bg-gray-50 transition duration-300">
                    <span className="text-base">Upload File</span>
                    <input type="file" className="hidden" name='file' onChange={ imageChangeHandler } />
                </label>
            </div>
            { base64 === null ? <div className='w-[150px] h-[150px] my-2' /> : <img src={ base64 } className='w-[150px] h-[150px] object-contain my-2' alt="Base 64 image" /> }
        </>
    )
}

export default FileInput
