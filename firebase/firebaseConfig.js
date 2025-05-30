import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVEPL_X1Nc6_tHD1nueBfXfWkj_x5vghE",
  authDomain: "marvelapi-af75c.firebaseapp.com",
  projectId: "marvelapi-af75c",
  storageBucket: "marvelapi-af75c.firebasestorage.app",
  messagingSenderId: "445655726063",
  appId: "1:445655726063:web:d408ddb0aada8fe899a81a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };
