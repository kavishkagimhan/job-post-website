import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAwf32ni7ye0ckFdx9vac2qut4bky7dx6o",
    authDomain: "job-post-a075f.firebaseapp.com",
    projectId: "job-post-a075f",
    storageBucket: "job-post-a075f.appspot.com",
    messagingSenderId: "222888618757",
    appId: "1:222888618757:web:c8c4a19bd571fe6a90e56c"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);