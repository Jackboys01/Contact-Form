import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBKvk4lrzqTDLuU3nUXdFd2qUHiTU9Fxys",
    authDomain: "contact-form-42fbb.firebaseapp.com",
    projectId: "contact-form-42fbb",
    storageBucket: "contact-form-42fbb.appspot.com",
    messagingSenderId: "808845742755",
    appId: "1:808845742755:web:8a6b8e5a8de11aad612516"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };