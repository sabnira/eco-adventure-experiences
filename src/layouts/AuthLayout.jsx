
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>

            <div className='py-8 w-11/12 mx-auto'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;