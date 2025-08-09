import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Category from '../components/Category.JSX';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-lato'>
            <nav>
                <Navbar></Navbar>
            </nav>

            <main>
                <Banner></Banner>
                <Category></Category>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;