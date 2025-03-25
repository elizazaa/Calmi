// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3A-Hcv9DeUaYkyl9P1p6aDAzvC2D0mW4",
  authDomain: "calmi-3acc5.firebaseapp.com",
  projectId: "calmi-3acc5",
  storageBucket: "calmi-3acc5.firebasestorage.app",
  messagingSenderId: "337259060863",
  appId: "1:337259060863:web:fa8e0a30ef93cc67ffa94a",
  measurementId: "G-BV6YBYV4X7"
};

// Ensure Firebase is initialized only once
let app;
let db;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app)
} else {
  app = getApp(); // If already initialized, use the existing app
}

// Ensure Auth is also initialized only once
let auth;
try {
  auth = getAuth(app); // Try getting existing auth instance
} catch (error) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}

export { app, auth, db };