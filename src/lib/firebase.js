import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDh_aGd8bvWDKxbtaj5lhbzhARyn3YM26o",
  authDomain: "eps-chat-70be2.firebaseapp.com",
  projectId: "eps-chat-70be2",
  storageBucket: "eps-chat-70be2.firebasestorage.app",
  messagingSenderId: "944221608183",
  appId: "1:944221608183:web:be445fa34df2c0c8c3dbf2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()