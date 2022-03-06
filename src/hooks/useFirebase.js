import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";



initializeAuthentication()
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider =  new GithubAuthProvider();
    const auth = getAuth();

    // Google Sign In
    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setUser(user)
        }).catch((error) => {
          setError(error.message);
        });
    };

    // GitHub Provider
    const signInUsingGitHub = () =>{
      signInWithPopup(auth, gitHubProvider)
  .then((result) => {
    const user = result.user;
    console.log(user);
    setUser(user)
    
  }).catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  });
    }
    

    // Oveserved Current User
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
    },[auth]);

    // Sign out 
    const logOut = () =>{
      signOut(auth).then(() => {
        setUser({})
      })
    }


    return {
        signInUsingGoogle,
        signInUsingGitHub,
        user,
        error,
        logOut
    }

}

export default useFirebase;