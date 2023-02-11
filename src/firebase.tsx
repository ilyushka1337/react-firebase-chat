import React, { createContext } from 'react'

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = initializeApp({
  apiKey: "AIzaSyBdQi5Qs5SvmM_1owBK_X33fOISj3F63A4",
  authDomain: "react-chat-41631.firebaseapp.com",
  projectId: "react-chat-41631",
  storageBucket: "react-chat-41631.appspot.com",
  messagingSenderId: "1069877051653",
  appId: "1:1069877051653:web:85615bd621872bfaac776c",
  measurementId: "G-7G6L7VWTEX"
});

const auth = getAuth(firebase)
const firestore = getFirestore(firebase)

const firebaseData = {firebase, auth, firestore}
export const FirebaseContext = createContext(firebaseData)

export function FirebaseContextProvider({ children }: { children: React.ReactNode }){
    return (
        <FirebaseContext.Provider value={firebaseData}>
            {children}
        </FirebaseContext.Provider>
    )
}