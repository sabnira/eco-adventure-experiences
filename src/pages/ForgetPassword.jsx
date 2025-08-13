import { Link } from "react-router-dom";

const ForgetPassword = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
    
    }

    return (
        <div className="flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm border">
                <h2 className="font-gloock text-2xl  text-center pt-4">Forgot your password?</h2>
                <p className="text-center pt-4 px-4 text-sm">Enter your email address, and we’ll send you a secure link to reset your password.</p>
                <div className="card-body space-y-2">
                    
                    <form onSubmit={handleSubmit} className="form space-y-2">

                        <input type="email" name="email" className="input w-full" placeholder="Email" required />

                        <button className="btn w-full bg-[#D5E880] mt-2 hover:bg-[#2A445E] hover:text-white">Reset Password</button>

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