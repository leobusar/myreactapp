import  firebase from 'firebase/app';
import 'firebase/firestore';  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA_ROy2FAp4TbrNxxMf4Vjw9h5R7x1k4-o",
    authDomain: "users-bc583.firebaseapp.com",
    projectId: "users-bc583",
    storageBucket: "users-bc583.appspot.com",
    messagingSenderId: "135718395262",
    appId: "1:135718395262:web:8783aa47fc94c92bf8672f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase; 