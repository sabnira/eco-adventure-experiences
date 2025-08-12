import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg border border-b-4 border-r-4 border-gray-500">

                <h2 className=" text-2xl font-thin text-center pt-4">Welcome <span className="font-gloock text-[#2A445E]">{user && user?.displayName}</span></h2>

                <div className="card-body space-y-2">

                    
                   <div className="w-28 h-28 mx-auto">
                        <img className="w-full h-full object-cover rounded-full border-2 border-[#2A445E]" src={user?.photoURL} alt="" />
                    </div>


                    <div className="flex gap-6 border p-2 text-lg rounded-md border-gray-400 justify-center items-center bg-base-200">
                        <div className="flex gap-2 justify-center items-center">
                            <FaUser className="text-[#2A445E]"></FaUser>
                            <h2>User Name :</h2>
                        </div>

                        <p>{user && user?.displayName}</p>
                    </div>


                    <div className="flex gap-6 border p-2 text-lg rounded-md border-gray-400 justify-center items-center bg-base-200">
                        <div className="flex gap-2 justify-center items-center">
                            <MdEmail className="text-[#2A445E]"></MdEmail>
                            <h2>Email :</h2>
                        </div>

                        <p>{user && user?.email}</p>
                    </div>


                    <p className="text-center">
                        Need to update your profile information? <Link to="/auth/profileUpdate" className="text-[#1b3248] underline font-bold">Update Profile</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;