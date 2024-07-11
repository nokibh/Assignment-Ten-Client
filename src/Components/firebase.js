// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyANYKKY57Tv42R0DZANuHlsefqKtvTDX2Q',
  authDomain: 'assignment-10-fd8f9.firebaseapp.com',
  projectId: 'assignment-10-fd8f9',
  storageBucket: 'assignment-10-fd8f9.appspot.com',
  messagingSenderId: '748304587411',
  appId: '1:748304587411:web:0c3acb04f985d9a3a34b66',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
