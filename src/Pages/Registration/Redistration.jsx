import { ToastContainer, toast } from "react-toastify";
// import loginbg from "../../assets/login.jpg"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';

// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { updateProfile } from "firebase/auth";


const Registration = () => {
    // const {createUser} = useContext(AuthContext)
    const {createUser} = useContext(AuthContext)


    const handleUserReg = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const photo = e.target.photo.value
        console.log(name,email,password,photo)

        if (!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
            return toast('Minimum six characters, at least one uppercase & special charecter')

        }

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            updateProfile(result.user, {
                displayName: name,
                photoURL: photo
            })
        })
        .catch(error => {
            console.error(error)
        })

        

    }


    return (
        <div>

            <div className="w-full flex justify-center items-center min-h-screen border bg-cover"  >
                <ToastContainer></ToastContainer>
                <div className="border lg:w-3/6 mt-10 backdrop-blur-lg bg-transparent rounded-tl-[50px] rounded-br-[50px] p-10">
                    <form className="card-body" onSubmit={handleUserReg}>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                    </form>
                    <p >Already have an account. Please <Link to="/login"><span className="font-semibold text-rose-400">Login</span></Link></p>
                </div>
            </div>

        </div>
    );
};

export default Registration;
