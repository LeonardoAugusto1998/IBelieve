import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAnFQUIotDF0aC-sHGV6ZsJl-uwqAL54_k",
  authDomain: "ibelieve-59f4f.firebaseapp.com",
  projectId: "ibelieve-59f4f",
  storageBucket: "ibelieve-59f4f.appspot.com",
  messagingSenderId: "214288550679",
  appId: "1:214288550679:web:4e413e3c302e0f4ce5c552"
};


if (!firebase.app.length){
    firebase.initializeApp(firebaseConfig);
}