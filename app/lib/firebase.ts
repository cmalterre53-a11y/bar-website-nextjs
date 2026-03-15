import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// =============================================================
// CONFIGURATION FIREBASE
// =============================================================
// Remplace les valeurs ci-dessous par celles de ton projet Firebase.
//
// Pour les trouver :
// 1. Va sur https://console.firebase.google.com
// 2. Sélectionne ton projet "barbylone"
// 3. Clique sur l'engrenage (Paramètres du projet)
// 4. Dans "Vos applications" → section "Configuration du SDK"
// 5. Copie les valeurs dans les champs correspondants ci-dessous
// =============================================================

const firebaseConfig = {
  apiKey: "AIzaSyDICpWWWkKJZAQFd1Zbk0FS0D_8mWo5_JE",
  authDomain: "barbylone-cea40.firebaseapp.com",
  projectId: "barbylone-cea40",
  storageBucket: "barbylone-cea40.firebasestorage.app",
  messagingSenderId: "804535885043",
  appId: "1:804535885043:web:b790d27df4e10b03a4ab86",
  measurementId: "G-5ER293CFVD",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
