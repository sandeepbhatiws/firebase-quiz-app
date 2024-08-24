import React, { useContext } from 'react'
import Header from './Common/Header'
import { getAuth,signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider  } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { FaGooglePlus } from "react-icons/fa";
import { CommonContext } from './Context/Context';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  let {setUserLogin} = useContext(CommonContext);
  
  let submitHandler = (event) => {
    event.preventDefault();
    // console.log(auth);
    
    var email  = event.target.email.value;
    var password  = event.target.password.value;
    // signUp(email,password);
    login(email,password);

  }

  let googleLogin = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    console.log(user)
    toast.success('login with goggle successfully')
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    toast.error(errorMessage);
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

  let login = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      localStorage.setItem('firebase_user',JSON.stringify(user));
      setUserLogin(true);
      navigate('/')
      toast.success('User Login Successfullyy');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage);
    });
  }

  // let signUp = (email,password) => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then((response) => {
  //     // Signed up 
  //     // const user = userCredential.user;
  //     // ...
  //     console.log(response);
  //     toast.success('User Register Successfullyy');
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;

  //     toast.error(errorMessage);
  //     // ..
  //   });
  //   console.log(email);
  //   console.log(password);
  // }

  return (
    <div>
      <Header/>
      <ToastContainer/>
      <div class="bg-indigo-100 py-6 md:py-12">
        <div class="container px-4 mx-auto">
          <div class="text-center max-w-2xl mx-auto">
            <h1 class="text-3xl md:text-4xl font-medium mb-2">Sign Up</h1>
          </div>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="max-w-md mx-auto shadow-md overflow-hidden shadow-lg m-4">
          <div class="w-full rounded-t-lg bg-green-500 text-lg text-white text-center font-bold px-4 py-4 mb-4">LOGIN</div>
          <form onSubmit={ submitHandler }>
          <div class="py-2 px-4">
            <label class="font-bold block">Email</label>
            <input 
              type="text" name='email'
              placeholder="example@example.com"
              class="bg-gray-200 w-full h-12 p-4 outline-none rounded transition-all focus:bg-gray-100"
              />
          </div>
          <div class="py-2 px-4">
            <label class="font-bold block">Password</label>
            <input 
              type="password" name='password'
              placeholder="******"
              class="bg-gray-200 w-full h-12 p-4 outline-none rounded transition-all focus:bg-gray-100"
              />
          </div>
          <div class="py-2 px-4">
            <button class="bg-green-400 text-white font-bold py-2 px-4 w-full rounded shadow-md transition-all hover:bg-green-500">
            SIGN UP
            </button>
          </div>
          </form>
          <div class="py-2 px-4 pb-4 text-center">
            <button onClick={ googleLogin} class="bg-red-500 text-white rounded-full h-10 w-10 m-1 transition-all hover:bg-red-600"><FaGooglePlus /></button>
            <button class="bg-blue-600 text-white rounded-full h-10 w-10 m-1 transition-all hover:bg-blue-700"><i class="fab fa-facebook-f"></i></button>
            <button class="bg-gray-600 text-white rounded-full h-10 w-10 m-1 transition-all hover:bg-gray-700"><i class="fab fa-github"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}
