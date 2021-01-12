import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDnpflvRdO1spIYVVzuGiaMVn19ZvwItx0",
    authDomain: "snapchat-19825.firebaseapp.com",
    projectId: "snapchat-19825",
    storageBucket: "snapchat-19825.appspot.com",
    messagingSenderId: "918548258069",
    appId: "1:918548258069:web:f27f3ccf976ba87bb51d1c"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, provider };