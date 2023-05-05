import React from 'react';
import ErrorImg from '../../assets/error.png'

const Error = () => {
    return (
        <div className='my-10 bg-red-200 p-10 text-center rounded-xl'>
            <div className='flex justify-center h-40'><img src={ErrorImg} alt="" /></div>
            <h2 className="text-3xl font-semibold p-2">Ooppss!!!</h2>
            <p className="text-xl font-semibold p-2">Page not found.</p>
        </div>
    );
};

export default Error;