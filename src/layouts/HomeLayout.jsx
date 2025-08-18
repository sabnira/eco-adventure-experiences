import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import About from '../components/About';
import Stats from '../components/Stats';
import Faqs from '../components/Faqs';
import DynamicTitle from '../components/DynamicTitle';
import Category from '../components/Category';


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeLayout = () => {


    useEffect(() => {
        AOS.init({
            duration: 1000,  // animation duration in ms
            offset: 120,     // start animation when 120px of the element is visible
            once: true,      // animation happens only once
        }); 
    }, []);

    return (
        <div className='font-lato'>
            <ToastContainer />
            <DynamicTitle />


            <Navbar></Navbar>

            <main>
                <Banner></Banner>

                <div className='w-11/12 mx-auto'>
                    <Category></Category>
                    <Outlet></Outlet>
                </div>

                <About></About>
                <Stats></Stats>
                <Faqs></Faqs>

            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default HomeLayout;