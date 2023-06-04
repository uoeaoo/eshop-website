import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCImabzFcY7m2YH5IbKLjmjRn2Ykw7GV9A",
  authDomain: "subway-gm.firebaseapp.com",
  projectId: "subway-gm",
  storageBucket: "subway-gm.appspot.com",
  messagingSenderId: "64157971258",
  appId: "1:64157971258:web:c39fca306c07239a33d603",
  measurementId: "G-J22877WHD8"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firebaseApp, db, auth };

