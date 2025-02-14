import React from 'react';
import Quotes from '../components/Quotes';

function Home() {
    return (
        <div className="grid grid-cols-3 gap-10 text-secondary">
            <div className='border border-gray-200 shadow-lg p-10 rounded-md cursor-pointer'>
                <h3 className='text-lg font-semibold text-center'>Number of documents</h3>
                <h1 className='text-center text-8xl font-bold'>10</h1>
            </div>
            <div className='border border-gray-200 shadow-lg p-10 rounded-md cursor-pointer'><h3 className='text-lg font-semibold text-center'>Number of Passwords</h3><h1 className='text-center text-8xl font-bold'>0</h1></div>
            <div className='border border-gray-200 shadow-lg p-10 rounded-md cursor-pointer'><h3 className='text-lg font-semibold text-center'>Profile Completed</h3><h1 className='text-center text-6xl mt-5 font-bold'>50%</h1></div>
            <Quotes />
        </div>
    );
}

export default Home;
