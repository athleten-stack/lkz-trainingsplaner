// Firebase-Konfiguration des LK Zug Trainingsplaners (nicht geheim, Schutz über firestore.rules)
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBq2XmCBtZTe4gXRd2GsH34sK30G0p1lig",
  authDomain: "lkz-trainingsplaner.firebaseapp.com",
  projectId: "lkz-trainingsplaner",
  storageBucket: "lkz-trainingsplaner.firebasestorage.app",
  messagingSenderId: "500197298722",
  appId: "1:500197298722:web:c7a9796014d47505e8707b"
};

// Interne Endung für Benutzernamen (wird nie angezeigt). Nicht mehr ändern, sobald Logins existieren.
export const USER_DOMAIN = "lkz-planer.app";
