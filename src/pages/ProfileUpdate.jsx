import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { toast } from "react-toastify";

const ProfileUpdate = () => {

    const { updateUserProfile} = useContext(AuthContext);

     // Live preview state
    const [photoPreview, setPhotoPreview] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
    
        updateUserProfile({displayName: name , photoURL: photo})
        .then(() => {
            toast.success("Update Profile Successful!");
            navigate("/auth/profile");
        })
        .catch(err => {
            console.log(err);
        })

           
    }

    return (
       <div className="flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg border border-b-4 border-r-4 border-gray-500">

                <h2 className="text-2xl text-[#2A445E] font-semibold text-center pt-4">Update Profile</h2>

                <div className="card-body space-y-2">

                    {photoPreview ? 
                      <>
                        <div className="w-28 h-28 mx-auto">
                            <img
                                className="w-full h-full object-cover rounded-full border-2 border-[#2A445E]"
                                src={photoPreview}
                                alt="Preview"
                            />
                        </div>
                      </> : 
                      <>
                        <div className="w-28 h-28 mx-auto">
                            <CiUser className="w-full h-full p-2 object-cover rounded-full border-2 border-[#2A445E]"></CiUser>
                        </div>
                      </>    
                    }

                    <form onSubmit={handleSubmit} className="form space-y-2 pt-4">

                        <input type="text" name="name" className="input w-full" placeholder="User Name" required/>

                        <input onChange={(e) => setPhotoPreview(e.target.value)} type="url" name="photo" className="input w-full"  placeholder="Photo-URL" required/>

                        <button className="btn w-full bg-[#D5E880] mt-4 hover:bg-[#2A445E] hover:text-white">Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdate;