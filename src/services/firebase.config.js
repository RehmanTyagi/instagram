// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getDatabase, ref, set } from 'firebase/database'
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
    measurementId: "G-3EZ6VP6J51",
    databaseURL: "https://sastagram-2023-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initializing Firestore Storage
export const myStorage = getStorage(firebaseApp)

//intialize realtime database
export const database = getDatabase(firebaseApp)


export const uploadPost = async (data) => {
    console.log(data)
    set(ref(database, 'posts/' + crypto.randomUUID()), { url: data }).then(alert('successful')).catch(err => alert(err))
}