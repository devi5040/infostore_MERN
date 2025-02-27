import React, { useState } from 'react'
import { convertToBase64 } from '../../util/images'

function FileInput( { label, imageUrl } ) {
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
            <div className='flex flex-col mt-1'>
                <label className="w-full flex flex-col items-center px-4 py-3 bg-white text-gray-400 rounded-lg tracking-wide border border-gray-300 cursor-pointer hover:bg-gray-50 transition duration-300">
                    <span className="text-base">{ label || 'Upload File' }</span>
                    <input type="file" className="hidden" name='file' onChange={ imageChangeHandler } />
                </label>
            </div>
            { base64 === null ? ( imageUrl ? <img src={ imageUrl } className='w-[70px] h-[70px] object-contain my-2' alt="Base 64 image" /> : <div className='w-[70px] h-[70px] my-2' /> ) : <img src={ base64 } className='w-[70px] h-[70px] object-contain my-2' alt="Base 64 image" /> }
        </>
    )
}

export default FileInput
