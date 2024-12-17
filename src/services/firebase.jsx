import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBZBc7NHBi3HPthQDy6MuCIo_IwMmcYtSI",
  authDomain: "coder-63385.firebaseapp.com",
  projectId: "coder-63385",
  storageBucket: "coder-63385.firebasestorage.app",
  messagingSenderId: "42764093302",
  appId: "1:42764093302:web:1b09c15fe6b8092380dc57"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)