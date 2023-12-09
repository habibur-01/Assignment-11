import error from "../../assets/404.png"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-[700px]">
            <div>
                <picture>
                    <img src={error} alt="errorpic" />
                </picture>
            </div>
            <div>
                <h1 className="uppercase text-3xl font-semibold">Opps!page not found</h1>
                <p className="text-xl my-4">Sorry, the page you are looking does not exist.</p>
                <p><Link to="/"><button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Return Home</button></Link></p>
            </div>

        </div>
    );
};

export default ErrorPage;