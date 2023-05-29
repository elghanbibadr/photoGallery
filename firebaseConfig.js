// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore ,serverTimestamp } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFY1QMIankdplYdi2bqY50jU_6Rwot2iI",
  authDomain: "photogallery-c3dd2.firebaseapp.com",
  projectId: "photogallery-c3dd2",
  storageBucket: "photogallery-c3dd2.appspot.com",
  messagingSenderId: "648358178324",
  appId: "1:648358178324:web:0c80de6cf19d914cacc101"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
export const timestamp = serverTimestamp();
// export const db=getFirestore(app)
export const projectFirestore =getFirestore(app)
