// import { Navbar } from '../Pages/SharedComponent/Navbar/Navbar';
import { Outlet } from "react-router-dom";

import Navbar from "../Pages/SharedComponent/Navbar/Navbar";
import Footer from "../Pages/SharedComponent/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div className="">
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;