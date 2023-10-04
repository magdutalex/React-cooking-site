import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANj_HdevIsU-oAC9h7XXDh65K5bwhxJyU",
  authDomain: "cooking-magdut-site.firebaseapp.com",
  projectId: "cooking-magdut-site",
  storageBucket: "cooking-magdut-site.appspot.com",
  messagingSenderId: "528984866435",
  appId: "1:528984866435:web:507715d0895b713e8825b6",
};

/*  init firebase */   // connects to our Firebase backend for us 

firebase.initializeApp(firebaseConfig);

// init services

const projectFirestore = firebase.firestore();

export { projectFirestore };
