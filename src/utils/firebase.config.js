// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { } from "firebase/getAuth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIXfdHjkiYPobaGdx9Xw1k8JKLyI_lNks",
    authDomain: "sastagram-2023.firebaseapp.com",
    projectId: "sastagram-2023",
    storageBucket: "sastagram-2023.appspot.com",
    messagingSenderId: "482733110044",
    appId: "1:482733110044:web:69dbc477df3821df3380d9",
    measurementId: "G-3EZ6VP6J51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)