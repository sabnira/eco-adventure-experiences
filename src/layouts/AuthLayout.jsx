
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DynamicTitle from '../components/DynamicTitle';

const AuthLayout = () => {
    return (
        <div>
            <ToastContainer />
            <DynamicTitle></DynamicTitle>
            <Navbar></Navbar>

            <div className='py-8 w-11/12 mx-auto'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;