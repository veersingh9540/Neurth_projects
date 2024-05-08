import firebase from 'firebase';
import "firebase/auth"
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyALhmRXj0LRodOGVR5HlOjpuKfWikrUgdc",
    authDomain: "neurth-7d634.firebaseapp.com",
    databaseURL: "https://neurth-7d634.firebaseio.com",
    projectId: "neurth-7d634",
    storageBucket: "neurth-7d634.appspot.com",
    messagingSenderId: "692090014532",
    appId: "1:692090014532:web:dadeb2d3df9cef42786511",
    measurementId: "G-X1YJ2QB3S1"
      

});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export  {db,auth,storage};