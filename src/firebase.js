import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCOWd-b69Ek1W2XPCrNdDUEleKYnwYfuSE',
  authDomain: 'disney-clone-f8b81.firebaseapp.com',
  projectId: 'disney-clone-f8b81',
  storageBucket: 'disney-clone-f8b81.appspot.com',
  messagingSenderId: '647799239820',
  appId: '1:647799239820:web:535450764619a477c177a9',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };

export default db;
