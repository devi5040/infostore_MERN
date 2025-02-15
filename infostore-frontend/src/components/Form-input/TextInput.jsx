import React from 'react'

function TextInput( { label, field, ...props } ) {
    return (
        <div className="relative w-full my-2">
            <input
                id={ field }
                name={ field }
                className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                { ...props }
            />
            <label
                htmlFor={ field }
                className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-secondary"
            >
                { label }
            </label>
        </div>
    )
}

export default TextInput
