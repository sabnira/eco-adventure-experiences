import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";

const Login = () => {

    const {setUser, userLogin} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

console.log(location);
console.log(location.state);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
        .then((result) => {
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state : "/");
        })
        .catch((err) => {
            console.log(err);
        })

    }

    return (
        <div className="flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm border">
                <h2 className="font-gloock text-2xl  text-center pt-4">Log in your account</h2>
                <div className="card-body space-y-2">
                    <form onSubmit={handleSubmit} className="form space-y-2">

                        <input type="email" name="email" className="input w-full" placeholder="Email" />

                        <input type="password" name="password" className="input w-full" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button className="btn w-full bg-[#D5E880] mt-2 hover:bg-[#2A445E] hover:text-white">Log in</button>
                    </form>
                    <div className="divider">OR</div>

                    <div className="btn flex justify-center items-center gap-2 text-lg">
                        <FcGoogle className="text-2xl"></FcGoogle>
                        <h2 className="text-[#1b3248] font-semibold">Log in with Google</h2>
                    </div>

                    <p className="text-center">
                        Don't Have An Account? <Link to="/auth/register" className="text-[#1b3248] font-bold">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;