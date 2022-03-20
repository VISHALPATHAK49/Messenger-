import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyBXacX5bmmbJ42oBZHhI8VSbTL-udBSWXo",
    authDomain: "messenger-e30a8.firebaseapp.com",
    projectId: "messenger-e30a8",
    storageBucket: "messenger-e30a8.appspot.com",
    messagingSenderId: "327512435797",
    appId: "1:327512435797:web:d3368b823bb5bc383078dc",
    measurementId: "G-T833P9X47D"
});
const db=firebaseApp.firestore();

export default db;