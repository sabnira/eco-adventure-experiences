import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const terms = form.terms.checked;

        if (!terms) {
            setErrorMessage('Please accept our terms and conditions.');
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('"Password must be at least 6 characters long and contain both uppercase and lowercase letters.');
            return;
        }

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user)


                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch(err => {
                        console.log(err);
                    })

            })
            .catch((error) => {
                const errorMessage = error.message;
                // console.log(errorMessage);
                setErrorMessage(errorMessage);
            })
    }

    return (
        <div className="flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm border">
                <h2 className="font-gloock text-2xl  text-center pt-4">Sign up your account</h2>
                <div className="card-body space-y-2">
                    <form onSubmit={handleSubmit} className="form space-y-2 ">

                        <input type="text" name="name" className="input w-full" placeholder="User Name" required/>

                        <input type="email" name="email" className="input w-full" placeholder="Email" required/>

                        <input type="url" name="photo" className="input w-full" placeholder="Photo-URL" required/>

                        <div className="input w-full flex">
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" required/>

                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                type="button" className="btn btn-xs ">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                        </div>

                        <label className="label mt-2">
                            <input type="checkbox"
                                name="terms" className="checkbox" />
                            Accept Our Terms And Condition.
                        </label>

                        {
                            errorMessage && <p className="text-red-500">{
                                errorMessage}</p>
                        }

                        <button className="btn w-full bg-[#D5E880] mt-2 hover:bg-[#2A445E] hover:text-white">Sign up</button>
                    </form>

                    <div className="divider">OR</div>

                    <div className="btn flex justify-center items-center gap-2 text-lg">
                        <FcGoogle className="text-2xl"></FcGoogle>
                        <h2 className="text-[#1b3248] font-semibold">Log in with Google</h2>
                    </div>

                    <p className="text-center">
                        Already Have An Account? <Link to="/auth/login" className="text-[#1b3248] font-bold underline">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;