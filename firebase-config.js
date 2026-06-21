// firebase-config.js
// Configuração e inicialização compartilhada do Firebase para o site Barber Noir.
// Importado como ES module tanto em horarios.html quanto em noir-admin-corrigido.html.

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocFromServer,
  getDocs,
  getDocsFromServer,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGnfvoS5ogUmWqEqLrXGcd6Se5lihoU84",
  authDomain: "barber-noir.firebaseapp.com",
  projectId: "barber-noir",
  storageBucket: "barber-noir.firebasestorage.app",
  messagingSenderId: "775973318325",
  appId: "1:775973318325:web:98fff754a82a4f6f3b58fc",
  measurementId: "G-Y1RLE399FX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  app,
  db,
  auth,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocFromServer,
  getDocs,
  getDocsFromServer,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  onSnapshot,
  serverTimestamp,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};
