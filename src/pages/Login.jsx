import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {

    const { setUser, userLogin, googleLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location);
    // console.log(location.state);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                toast.success("Login Successful!");
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/auth/profile");
            })
            .catch((err) => {
                setErrorMessage(err.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleLogin()
        .then((result) => {
             toast.success("Login Successful!");
            setUser(result.user)
            navigate(location?.state ? location.state : "/auth/profile");
        })
        .catch(error => {
            console.log('ERROR',error.message);
           
        })
    }

    return (
        <div className="flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm border">
                <h2 className="font-gloock text-2xl  text-center pt-4">Log in your account</h2>
                <div className="card-body space-y-2">
                    <form onSubmit={handleSubmit} className="form space-y-2">

                        <input type="email" name="email" className="input w-full" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required />

                        <div className="input w-full flex">
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" required />

                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                type="button" className="btn btn-xs ">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                        </div>

                        <div><Link to="/auth/forgetPassword" state={{ email }} className="link link-hover">Forgot password?</Link></div>

                        {
                            errorMessage && <p className="text-red-500">{
                                errorMessage}</p>
                        }

                        <button className="btn w-full bg-[#D5E880] mt-2 hover:bg-[#2A445E] hover:text-white">Log in</button>
                    </form>
                    <div className="divider">OR</div>

                    <div onClick={handleGoogleSignIn} className="btn flex justify-center items-center gap-2 text-lg">
                        <FcGoogle className="text-2xl"></FcGoogle>
                        <h2 className="text-[#1b3248] font-semibold">Log in with Google</h2>
                    </div>

                    <p className="text-center">
                        Don't Have An Account? <Link to="/auth/register" className="text-[#1b3248] font-bold underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;