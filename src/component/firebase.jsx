 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

 
const firebaseConfig = {
  apiKey: "AIzaSyCNRVKRmH-5GgsJnWFbRnV8u3p6hkMMIQ0",
  authDomain: "netflixgpt-91aac.firebaseapp.com",
  projectId: "netflixgpt-91aac",
  storageBucket: "netflixgpt-91aac.appspot.com",
  messagingSenderId: "571033171241",
  appId: "1:571033171241:web:a4c703ad2c7e4514be3338",
  measurementId: "G-VKGF1JGY7M"
};

 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();

