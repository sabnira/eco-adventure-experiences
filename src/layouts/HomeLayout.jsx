import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Category from '../components/Category.JSX';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <div className='font-lato'>
            <ToastContainer />
            <nav>
                <Navbar></Navbar>
            </nav>

            <main>
                <Banner></Banner>

                <div className='w-11/12 mx-auto'>
                    <Category></Category>
                    <Outlet></Outlet>
                </div>
                
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;