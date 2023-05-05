import React from 'react';
import { ImSpinner9 } from 'react-icons/im';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-[100vh-80]'>
            <div><ImSpinner9 className='text-2xl text-red-700 animate-spin'/></div>
        </div>
    );
};

export default Spinner;