import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../Firebase/Firebase.config';
import { signInWithEmailAndPassword } from "firebase/auth";

const Authprovider = ({ children }) => {

  const [user, setUser] = useState(null)

  const regesterwithemailpassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }


  /* login foe the exsisting user */
const loginuser = (auth, email, password) => {
  return signInWithEmailAndPassword(auth. email, password)
}



  /* log out perfrms */

  const logout = () => {
   return signOut(auth)
  }
  
  /* here provider use with the help of onauthstatechange  #also use useefect hook here*/
  useEffect( () => {
  const unsubcrive =   onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);

    })
    return () => {
      unsubcrive();
    }

  },[])



  const authinfo = {
    regesterwithemailpassword,
    user,
    logout,
    loginuser,
  };

  return (
    <Authcontext value={authinfo}>
      {children}
    </Authcontext>
  );
};

export default Authprovider;
