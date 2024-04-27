// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDLTV5XyfIgM1ICiZiE5YjM5PkLH-GQ2Us',
  authDomain: 'tourisum-spot.firebaseapp.com',
  projectId: 'tourisum-spot',
  storageBucket: 'tourisum-spot.appspot.com',
  messagingSenderId: '58019808524',
  appId: '1:58019808524:web:87cba0350d577b3cfeb529',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
