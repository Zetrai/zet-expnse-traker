import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCkHieLWOFOxmehnOZ8jUjET8RsTcpCO8g',
  authDomain: 'expense-trackr-d42f9.firebaseapp.com',
  projectId: 'expense-trackr-d42f9',
  storageBucket: 'expense-trackr-d42f9.appspot.com',
  messagingSenderId: '512674429143',
  appId: '1:512674429143:web:74ec811dead076d9b7d892',
  measurementId: 'G-LBMM8WS5EF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Initialize Database from firestore
export const db = getFirestore();

// Create User Document in DB from auth
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log('Error Creating the user', error.message);
    }
  }
};

// Email And Password functions
export const createAuthUserWithEmailAndPassword = async (
  email,
  password,
  displayName
) => {
  if (!email || !password) return;
  const res = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(res.user, { displayName: displayName });
  return auth.currentUser;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

// onAuthStateChanged is an Observable Listner (hover over it)
/**
 * {
 * next: callback
 * error: errorCallback,
 * complete: completeCallback
 * }
 */
export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);
