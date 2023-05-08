import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='md:mx-20'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;