import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD6yuWnxRvXHLOZoVBeU0QT2LtJOjR3QUA",
    authDomain: "cryptoverse-8d6cd.firebaseapp.com",
    projectId: "cryptoverse-8d6cd",
    storageBucket: "cryptoverse-8d6cd.appspot.com",
    messagingSenderId: "112658156613",
    appId: "1:112658156613:web:2f71038ae4450c0692a72c"
  };

 const app =  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();


  export {auth};
  export default db;
  