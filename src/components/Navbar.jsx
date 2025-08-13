import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/adventures">Adventures</NavLink>
        <NavLink to="/about">About</NavLink>
    </>

    return (
        <div className="navbar bg-base-100 p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <div className="flex gap-2  bg-[#2A445E] text-white pr-24 md:px-16 py-2 items-center [clip-path:polygon(0_0,85%_0,calc(104%-18px)_100%,0_100%)]">
                    <img className="w-16" src={logo} alt="" />
                    <h2 className="text-sm md:text-xl font-thin">Eco Adventure Experiences</h2>
                </div>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6 text-lg mx-2 text-[#2A445E] font-thin">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex md:gap-4 md:pr-16">



                {
                    user ?
                        <>
                            <div className="tooltip tooltip-left" data-tip={user && user?.displayName}>
                                <div className="w-10 h-10"><img className="w-full h-full object-cover rounded-3xl" src={user?.photoURL} alt="" /></div>
                            </div>

                            <NavLink to="/auth/profile" className="btn bg-[#2A445E] text-white hover:bg-[#D5E880] hover:text-black">Profile</NavLink>

                            <button onClick={logOut} className="btn bg-[#2A445E] text-white hover:bg-[#D5E880] hover:text-black">Logout</button>
                        </>
                        :
                        <>
                            <button className="text-4xl"><CgProfile></CgProfile></button>
                            <NavLink to="/auth/login" className="btn bg-[#2A445E] text-white font-thin hover:bg-[#D5E880] hover:text-black">Login</NavLink>
                        </>

                }

            </div>
        </div>
    );
};

export default Navbar;