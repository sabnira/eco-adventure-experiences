import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const HomeLayout = () => {
    return (
        <div className='font-lato'>
            <nav>
                <Navbar></Navbar>
            </nav>

            <main>
                <Banner></Banner>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;