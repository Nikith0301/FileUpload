// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAux_a2ECIiDnwfSRQiMEj-lM-GyvFeG5A",
  authDomain: "uploadingfile-73697.firebaseapp.com",
  projectId: "uploadingfile-73697",
  storageBucket: "uploadingfile-73697.appspot.com",
  messagingSenderId: "202301260214",
  appId: "1:202301260214:web:1029f19afdb6020b780117"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)