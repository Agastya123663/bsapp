import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyARpEbyHdYVHc2Z1NDYtfpU-m6mklpMTyk",
    authDomain: "bartersystemapp-5a16f.firebaseapp.com",
    projectId: "bartersystemapp-5a16f",
    storageBucket: "bartersystemapp-5a16f.appspot.com",
    messagingSenderId: "517501869884",
    appId: "1:517501869884:web:cd21a53980d74b8b3c0839"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();