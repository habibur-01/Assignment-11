import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import loginPagePic from "../../assets/login.png"
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const { userSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()


    const handleUserLogIn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const userInfo = { email, password }
        console.log(userInfo)

        userSignIn(email, password)
            .then(user => {
                console.log(user)
                navigate(location?.state ? location.state : "/")
                return toast('Successfully loged in')
            })
            .catch(error => {
                console.log(error.message)
                toast('Email or Password dose not match')
            })

    }


    return (
        <div className="flex justify-center gap-4 mb-6 items-center h-[700px]">
            <ToastContainer></ToastContainer>
            <div className="hidden lg:block">
                <picture>
                    <img src={loginPagePic} alt="" />
                </picture>

            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleUserLogIn}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">

                        <button className="btn btn-primary">Login</button>

                    </div>
                </form>
                <div className="px-4 mb-4">
                    <p>Are you new here? Please <Link to="/register"><span className="text-rose-400">Registration</span></Link></p>
                </div>
            </div>

        </div>
    );
};

export default Login;