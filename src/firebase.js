// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBm6dwsMsCMlTnQz1etqhD8sQdLPkFkx6U",
    authDomain: "discord-clone-1795a.firebaseapp.com",
    projectId: "discord-clone-1795a",
    storageBucket: "discord-clone-1795a.appspot.com",
    messagingSenderId: "1028820981995",
    appId: "1:1028820981995:web:70ffe37876a7ab3f5806ae",
    measurementId: "G-FTXD0JG4FT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

//THIS IS STANDARD CODE FOR USING FIREBASE