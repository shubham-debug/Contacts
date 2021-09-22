import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB84JGo-6X3N7pmZfpcU-zdgll9NKSfhb8",
  authDomain: "fir-f070e.firebaseapp.com",
  projectId: "fir-f070e",
  storageBucket: "fir-f070e.appspot.com",
  messagingSenderId: "702689136773",
  appId: "1:702689136773:web:d86d45564f11e12ff199ec",
  measurementId: "G-BKZW9W81JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;