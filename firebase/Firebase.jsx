import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyALIYOXHIdMFQ6tSe3SLTzzXDDZA_NsecE",
  authDomain: "react-social-media-a6784.firebaseapp.com",
  projectId: "react-social-media-a6784",
  storageBucket: "react-social-media-a6784.appspot.com",
  messagingSenderId: "1070503628731",
  appId: "1:1070503628731:web:db3097e288a2ad124afe9e",
};

export const useFirebase = () => useContext(firebaseContext);

const FirebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(FirebaseApp);
const GoogleProvider = new GoogleAuthProvider();
const firestore = getFirestore(FirebaseApp);
const storage = getStorage(FirebaseApp);

// eslint-disable-next-line react/prop-types
export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("user");
  const [email, setEmail] = useState(null);
  const [url, setUrl] = useState(null);
  const [userId, setUserId] = useState(null);

  // sign up user
  const signupUser = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  // sign in user
  const signInUser = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  // google login
  const signinWithGoogle = () =>
    signInWithRedirect(firebaseAuth, GoogleProvider);

  // check user login or not

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const isLoggedIn = user ? true : false;

  // LoggedOut user
  const LoggedOut = () => {
    signOut(firebaseAuth);
  };
  // get user name in display
  const DisplayName = () => {
    onAuthStateChanged(firebaseAuth, (user) => setName(user.displayName));
  };

  // get username or email
  const DisplayEmail = () => {
    onAuthStateChanged(firebaseAuth, (user) => setEmail(user.email));
  };
  // get user image
  const UserImg = () => {
    onAuthStateChanged(firebaseAuth, (user) => setUrl(user.photoURL));
  };
  // get  user post data
  const handleCreatePost = async (disc, cover) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
    const uploadResult = await uploadBytes(imageRef, cover);
    return await addDoc(collection(firestore, "userUpload"), {
      disc,
      imageURL: uploadResult.ref.fullPath,
      userID: user.uid,
      useEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };
  // set user post data
  const listPost = () => {
    return getDocs(collection(firestore, "userUpload"));
  };

  // get image for post data
  const getImageURL = (path) => {
    return getDownloadURL(ref(storage, path));
  };

  useEffect(() => {
    DisplayName();
    DisplayEmail();
    UserImg();
  }, []);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
  }, []);
  return (
    <firebaseContext.Provider
      value={{
        signupUser,
        signInUser,
        signinWithGoogle,
        isLoggedIn,
        LoggedOut,
        name,
        email,
        url,
        handleCreatePost,
        listPost,
        getImageURL,
        userId,
      }}
    >
      {children}
    </firebaseContext.Provider>
  );
};
