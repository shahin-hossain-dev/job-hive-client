import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useSecureAxios from "../hooks/useSecureAxios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const secureAxios = useSecureAxios();

  const userCreate = (email, password) => {
    //need auth
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    //need auth
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // logout user
  const logOut = () => {
    return signOut(auth);
  };

  //update user profile
  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // console.log(currentUser);
      const UserEmail = currentUser?.email || user?.email;
      const loggedUser = { email: UserEmail };

      if (currentUser) {
        await secureAxios.post("/jwt", loggedUser);
        // console.log(res);
        // .then((res) => console.log(res.data));
      } else {
        await secureAxios.post("/logout", loggedUser);
      }
    });
    return () => {
      unsubscribed();
    };
  }, [secureAxios, user?.email]);

  const authInfo = {
    user,
    loading,
    userCreate,
    userLogin,
    googleLogin,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
