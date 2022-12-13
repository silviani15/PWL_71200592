import 'firebase/firestore'
import {firestore, initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZ0Ra6F2KtTlFIV0NSPs7Xcc302k0SZUc",
  authDomain: "project2-pwl-d34f2.firebaseapp.com",
  projectId: "project2-pwl-d34f2",
  storageBucket: "project2-pwl-d34f2.appspot.com",
  messagingSenderId: "16483895279",
  appId: "1:16483895279:web:5ad028226dca44d1e7d81a",
  measurementId: "G-8XG7E2XP7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = firestore(app);