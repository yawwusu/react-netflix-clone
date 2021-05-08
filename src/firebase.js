import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDGwZLxKzwHn8bv_V2_jDOz5QbmXHmSMg",
    authDomain: "react-netflix-clone-58c6f.firebaseapp.com",
    projectId: "react-netflix-clone-58c6f",
    storageBucket: "react-netflix-clone-58c6f.appspot.com",
    messagingSenderId: "342459104058",
    appId: "1:342459104058:web:43225863eb5a70d9416e03",
    measurementId: "G-75FVGKLCRD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;