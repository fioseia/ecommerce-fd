import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA7B24sB0-N5utWPqc6Eo7Fvb9ZCXp3JEA",
    authDomain: "fd-store-86e27.firebaseapp.com",
    projectId: "fd-store-86e27",
    storageBucket: "fd-store-86e27.appspot.com",
    messagingSenderId: "551710898774",
    appId: "1:551710898774:web:6b7ed9f28c4906d07799f7",
    measurementId: "G-E8VD88CH8G"
};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

export { auth, db, storage };
