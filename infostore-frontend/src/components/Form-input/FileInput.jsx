import React from 'react'

function FileInput( { label } ) {
    return (
        <>
            <div>
                <label htmlFor="file">{ label }</label>
                <input type="file" name="file" id="file" />
            </div>
            <div className='w-[150px] h-[150px]' /></>
    )
}

export default FileInput
