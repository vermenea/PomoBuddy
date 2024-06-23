import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD8cEAG7ZcDYfIuLI8QE02smRgGf2UGJxo",
    authDomain: "pomodoro-buddy.firebaseapp.com",
    projectId: "pomodoro-buddy",
    storageBucket: "pomodoro-buddy.appspot.com",
    messagingSenderId: "412138469747",
    appId: "1:412138469747:web:36b1f1b3d5c38b169aad06"
  };

const app = initializeApp(firebaseConfig); 
const db = getFirestore(app); // --> db connection

export {db};