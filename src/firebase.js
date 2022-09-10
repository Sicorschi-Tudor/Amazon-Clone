// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDoKdBMb_aXQfh7aIUPxLRwpdUCb4GeHUo",
    authDomain: "cloneapp-11b54.firebaseapp.com",
    projectId: "cloneapp-11b54",
    storageBucket: "cloneapp-11b54.appspot.com",
    messagingSenderId: "1068274773475",
    appId: "1:1068274773475:web:4bfcadfd1b0ccf2da304d6",
    measurementId: "G-W6QWVM8JXQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};