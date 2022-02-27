import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
// import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { auth } from "./firebase";
import { useEffect } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
  const [ user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const value = {
    user,
    loading
  };

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribed();
    }
  },[]);
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
};
