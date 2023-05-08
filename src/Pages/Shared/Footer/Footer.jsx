import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImGooglePlus3 } from 'react-icons/im';
import { ImWhatsapp } from 'react-icons/im';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
           
            <div className='bg-black bg-opacity-95 px-5 md:px-48 py-20 text-white text-center'>
            <h2 className="text-red-300 mb-8 text-2xl font-bold tracking-wide">Deshi Delights</h2>
            <p className='font-semibold mb-10'>Discover the taste of our passion for food. Every dish we serve is created with love and passion for the art of cooking.</p>
            
            <div className='flex justify-center items-center gap-5 text-lg h-20 tracking-wide'>
            <Link to="#" className='text-2xl hover:text-3xl w-10 hover:text-yellow-500'><FaFacebook /></Link>
            <Link to="#" className='text-3xl hover:text-4xl w-10 hover:text-yellow-500'><AiFillTwitterCircle/></Link>
            <Link to="#" className='text-2xl hover:text-3xl w-10 hover:text-yellow-500'> <ImGooglePlus3/></Link>
            <Link to="#" className='text-4xl hover:text-5xl w-10 hover:text-yellow-500'><TiSocialLinkedinCircular/></Link>
            <Link to="#" className='text-2xl hover:text-3xl w-10 hover:text-yellow-500'><ImWhatsapp/></Link>
            </div>
        </div>
        <div className='bg-black text-white text-xs p-5 text-center'>
            copyright @2023 All rights reserved
        </div>
        </div>
    );
};

export default Footer;