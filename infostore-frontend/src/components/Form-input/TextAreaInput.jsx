import React from 'react'

function TextAreaInput( { label, field, value } ) {
    return (
        <div className="flex justify-center flex-col space-y-2 text-gray-400">
            <label htmlFor="achievements">{ label }</label>
            <textarea name={ field } id={ field } className='border border-gray-300  focus:ring-2 focus:outline-none focus:border-transparent focus:ring-secondary p-2 rounded-md' rows={ 3 }>{ value }</textarea>
        </div>
    )
}

export default TextAreaInput
