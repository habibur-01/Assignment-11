import axios from "axios";
import { useEffect } from "react";
// import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


export const axiosSecure = axios.create({
    baseURL: 'https://b8a11-server-side-habibur-01.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { userSignOut } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if (error.response.status === 401 ) {
                console.log('logout the user')
                userSignOut()
                    .then(() => { 
                        navigate('/login')
                    })
                    .catch(error => console.log(error))
            }
        })
    }, [navigate,userSignOut])

    return axiosSecure;
};

export default useAxiosSecure;