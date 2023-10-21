import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../../firebase.config";

const auth = getAuth(app)


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //   sing up 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //    sing in user

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    //  logout  
    const logOut = () => {
        return signOut(auth)
    }



    //    UpdateProfile
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


       //   using observer current user
       useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth, (user) => {
              setUser(user)
              setLoading(false)
         })
         return () => {
            unSubscribe()
         }
        },[])
     
    //   console.log(user)
    



    const userInfo = {
        user,
        loading,
        createUser,
        googleLogin,
        signIn,
        logOut,
        handleUpdateProfile
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;