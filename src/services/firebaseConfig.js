import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdmed2JAuxAOM3yzAIbuK3SObntHPv5eg",
  authDomain: "db-login-test-devmarcus.firebaseapp.com",
  projectId: "db-login-test-devmarcus",
  storageBucket: "db-login-test-devmarcus.appspot.com",
  messagingSenderId: "731642757541",
  appId: "1:731642757541:web:04c959144c34215fc9a84c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);