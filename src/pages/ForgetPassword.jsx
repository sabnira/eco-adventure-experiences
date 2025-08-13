import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";


const ForgetPassword = () => {

    const { forgetPassword } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const emailRef = useRef();
    const location = useLocation();

    // Prefill email from login page if available
    useEffect(() => {
        if (location.state?.email) {
            emailRef.current.value = location.state.email;
        }
    }, [location.state]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        // console.log(email);

        forgetPassword(email)
            .then(() => {
                toast("Password Reset email sent, please check your email.")
                navigate("/auth/login");
            })
            .catch((err) => {
                setErrorMessage(err.message);
            })

    }

    return (
        <div className="flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm border">
                <h2 className="font-gloock text-2xl  text-center pt-4">Forgot your password?</h2>
                <p className="text-center pt-4 px-4 text-sm">Enter your email address, and we’ll send you a secure link to reset your password.</p>
                <div className="card-body space-y-2">

                    <form onSubmit={handleSubmit} className="form space-y-2">

                        <input type="email" name="email" ref={emailRef} className="input w-full" placeholder="Email" required />

                        {
                            errorMessage && <p className="text-red-500">{
                                errorMessage}</p>
                        }

                        <button onClick={handleForgetPassword} className="btn w-full bg-[#D5E880] mt-2 hover:bg-[#2A445E] hover:text-white">Reset Password</button>

                    </form>

                    <div className="divider">OR</div>

                    <p className="text-center">
                        <Link to="/auth/register" className="text-[#1b3248] font-bold underline">Create New Account</Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;