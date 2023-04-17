import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const Providers = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const createNewUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const createOldUser = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const passwordResetMail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const handleSignout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    createNewUser,
    createOldUser,
    passwordResetMail,
    handleSignout,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default Providers;
