// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZLdoBYy9AGr0AFuveAWGE_Mw6z6mqHv8",
    authDomain: "react-cursos-226dd.firebaseapp.com",
    projectId: "react-cursos-226dd",
    storageBucket: "react-cursos-226dd.appspot.com",
    messagingSenderId: "535131872189",
    appId: "1:535131872189:web:fb41fd299b34ab28b950d4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)