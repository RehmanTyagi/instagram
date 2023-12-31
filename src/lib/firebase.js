// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FieldValue, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyBIXfdHjkiYPobaGdx9Xw1k8JKLyI_lNks",
    authDomain: "sastagram-2023.firebaseapp.com",
    projectId: "sastagram-2023",
    storageBucket: "sastagram-2023.appspot.com",
    messagingSenderId: "482733110044",
    appId: "1:482733110044:web:69dbc477df3821df3380d9",
    measurementId: "G-3EZ6VP6J51",
    databaseURL: "https://sastagram-2023-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const firebase = initializeApp(config);

//firestore
const db = getFirestore(firebase);

// Initializing Firestore StorageKT
const myStorage = getStorage(firebase);

export { db, firebase, FieldValue, myStorage }; 