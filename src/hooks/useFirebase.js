import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.initialize";


//calling initializaFirebase function to start firebase authentication
initializeAuthentication();
let auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  console.log(admin);
  // creating brand new user by register page
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setAuthError("");
        const user = result.user;
        const newUser = { email, displayName: name }; //setting displayName after creating user
        setUser(newUser);
        // save into databse
        saveUser(email, name, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/login");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // login user by email and password
  const login = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        setUser(user);
        console.log(user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // logout user
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state changing whether user logged in another browser/tab or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  /*======================
      signInWithGoogle
  ========================*/
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        // setUser(user);
        const destination = location?.state?.from || "/home";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // saveing auth into database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://stormy-atoll-19739.herokuapp.com/premium-autos/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // admin tasks
  useEffect(() => {
    fetch(
      `https://stormy-atoll-19739.herokuapp.com/premium-autos/users/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        console.log(data);
      });
  }, [user.email]);

  // returning all auth function to use globally by custom hooks where needed authentication
  return {
    isLoading,
    user,
    admin,
    registerUser,
    login,
    logout,
    signInWithGoogle,
  };
};

export default useFirebase;
