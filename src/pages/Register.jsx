import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthContext";


const Register = () => {

    const {createNewUser, setUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        // const photo = form.photo.value;
        const password = form.password.value;

        
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }

    return (
        <div className="flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm border">
                <h2 className="font-gloock text-2xl  text-center pt-4">Sign up your account</h2>
                <div className="card-body space-y-2">
                    <form onSubmit={handleSubmit} className="form space-y-2 ">

                        <input type="text" name="name" className="input w-full" placeholder="User Name" />

                        <input type="email" name="email" className="input w-full" placeholder="Email" />

                        <input type="text" name="photo" className="input w-full" placeholder="Photo-URL" />

                        <input type="password" name="password" className="input w-full" placeholder="Password" />

                        <button className="btn w-full bg-[#D5E880] mt-2 hover:bg-[#2A445E] hover:text-white">Sign up</button>
                    </form>

                    <p className="text-center">
                        Already Have An Account? <Link to="/auth/login" className="text-[#1b3248] font-bold">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;