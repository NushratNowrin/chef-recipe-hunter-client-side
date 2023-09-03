import React from 'react';
import ActiveLink from '../../SharedItems/ActiveLink/ActiveLink';

const Discount = () => {
    return (
        <div className='discount flex justify-center items-center md:px-48 md:py-32 py-20 px-2'>
				<div className=' text-center py-12 md:px-20 xs:px-10 px-5  w-11/12 bg-black bg-opacity-75 rounded-full outline-dotted outline-4 outline-offset-8'>
					<h2 className='text-amber-500 text-xl font-semibold tracking-wide'>
						Get 25% Discount
					</h2>
					<p className='font-semibold tracking-wide text-3xl text-red-400 my-5'>
						Explore Special Taste & The Best Quality
					</p>
					<div className='h-16 flex items-center justify-center'>
						<button className='bg-amber-600 text-white px-5 py-3 font-bold rounded-2xl tracking-wide hover:bg-amber-700 hover:text-lg ease-in-out duration-300'>
							<ActiveLink to='/recipes'>Show All Items</ActiveLink>
						</button>
					</div>
				</div>
			</div>
    );
};

export default Discount;