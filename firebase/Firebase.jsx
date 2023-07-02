import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { 
    getAuth,
     createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
       GoogleAuthProvider,
        signInWithPopup,
        onAuthStateChanged,
        signOut
     } from 'firebase/auth'


const firebaseContext = createContext()


const firebaseConfig = {
  apiKey: "AIzaSyALIYOXHIdMFQ6tSe3SLTzzXDDZA_NsecE",
  authDomain: "react-social-media-a6784.firebaseapp.com",
  projectId: "react-social-media-a6784",
  storageBucket: "react-social-media-a6784.appspot.com",
  messagingSenderId: "1070503628731",
  appId: "1:1070503628731:web:db3097e288a2ad124afe9e"
};

export const useFirebase = () => useContext(firebaseContext) 

const FirebaseApp = initializeApp(firebaseConfig); 
const firebaseAuth = getAuth(FirebaseApp)
const GoogleProvider = new GoogleAuthProvider()


// eslint-disable-next-line react/prop-types
export const FirebaseProvider = ({children})=>{
    const [user, setUser] = useState(null)
    // sign up user 
    const signupUser = (email, password) => createUserWithEmailAndPassword(firebaseAuth, email, password)

    // sign in user
    const signInUser = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password)

    // google login 
    const signinWithGoogle = ()=> signInWithPopup(firebaseAuth, GoogleProvider)

    // check user login or not 

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth, user=> {
            if(user) setUser(user);
            else setUser(null)
        })
    },[])

    const isLoggedIn = user ? true : false


    // LoggedOut user  
    const LoggedOut = ()=> {
        signOut(firebaseAuth)
    }
    return <firebaseContext.Provider value={{
            signupUser,
            signInUser,
            signinWithGoogle,
            isLoggedIn,
            LoggedOut
          }}>
                  {children}
            </firebaseContext.Provider>
}
