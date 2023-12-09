import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firbase/firebase.config";
import axios from "axios";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
// import auth from "../Firbase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // const [data, setData] = useState([])

    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser)
            // console.log(currentUser)
            setLoading(false)
            if(currentUser){
               
                axios.post('https://b8a11-server-side-habibur-01.vercel.app/jwt',loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
            }
            else{
                axios.post('https://b8a11-server-side-habibur-01.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data)
                })
            }
        })
        return (() => {
            unSubscribe();
        })
    }, [user?.email])

    

    // google 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const userSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }




    const authInfo = {
        user,
        loading,
        // data,
        createUser,
        userSignIn,
        userSignOut,
        signInWithGoogle


    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node

}

export default AuthProvider;
