import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDYywUQFTENlIQ_iGxg9FSKo09cNGK5r3U",
    authDomain: "music-storage-f57ed.firebaseapp.com",
    databaseURL: "https://music-storage-f57ed.firebaseio.com",
    projectId: "music-storage-f57ed",
    storageBucket: "music-storage-f57ed.appspot.com",
    messagingSenderId: "219072623913",
    appId: "1:219072623913:web:96b73070ef8c2a8ff0f338"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
