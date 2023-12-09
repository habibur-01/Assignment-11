import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.png"
import { FaSearch,  FaUserAlt } from 'react-icons/fa';
// import { GrMenu } from 'react-icons/gr';
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext)
    const navigate = useNavigate();
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navLinks = <>
        <li className=""><NavLink to="/"> Home </NavLink></li>
        <li className=""><NavLink to="/about"> About </NavLink></li>
        <li className=""><NavLink to="/rooms"> Rooms </NavLink></li>
        <li className=""><NavLink to="/bookings"> My Bookings </NavLink></li>
        {/* <li className="btn"><NavLink to="/contact"> Contact </NavLink></li> */}
    </>


    const handleLogOut = () => {
        userSignOut()
            .then(() => {

                toast('Logout successfull')
                navigate("/");

            })
            .catch(error => {
                console.log(error)
            })

    }

    // const handleDropdown = () => {
    //     setIsDropdownOpen(!isDropdownOpen);
    // };

    // const closeDropdown = () => {
    //     setIsDropdownOpen(false);
    // };

    return (
        <div>
            <div className="navbar bg-base-100">
                <ToastContainer></ToastContainer>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                    <picture>
                        <img className="w-20 h-20 invisible md:visible" src={logo} alt="logo" />
                    </picture>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-4">
                        <div><FaSearch /></div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar  flex items-center justify-center">

                                {
                                    user ? <img src={user.photoURL} className="w-16 h-16 rounded-full"></img> : <FaUserAlt></FaUserAlt>
                                }

                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <NavLink to="/profile">
                                        <p className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </p>
                                    </NavLink>

                                </li>
                                <li><NavLink to="/addproduct">My Booking</NavLink></li>
                                {/* <li><NavLink to="/addproduct">Add Product</NavLink></li> */}
                                {/* <li><NavLink to="/setting">Settings</NavLink></li> */}
                                {/* <li><NavLink to={`/login`}>Login</NavLink></li> */}
                            </ul>
                        </div>
                        <div>
                            {
                                user ? <button onClick={handleLogOut} className="btn btn-outline btn-success">Logout</button> : <NavLink to={`/login`}><button className="btn btn-outline btn-success">Login</button></NavLink>
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
