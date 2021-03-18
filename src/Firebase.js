import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyActfLiUO4lr2uXLSN1o7DoecKcy95YJKE",
    authDomain: "mediapp-a44f4.firebaseapp.com",
    databaseURL: "https://mediapp-a44f4.firebaseio.com",
    projectId: "mediapp-a44f4",
    storageBucket: "mediapp-a44f4.appspot.com",
    messagingSenderId: "359729549762",
    appId: "1:359729549762:web:176faed1be926f1218865b",
    measurementId: "G-8E44VM2V0D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;