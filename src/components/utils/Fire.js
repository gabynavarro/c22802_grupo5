// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const Fire = {



    apiKey: "AIzaSyBmvHu_UTrL9Eb4NpPwV39mGcby9Yu3j3k",
  
    authDomain: "my-video-d2772.firebaseapp.com",
  
    projectId: "my-video-d2772",
  
    storageBucket: "my-video-d2772.appspot.com",
  
    messagingSenderId: "984914174548",
  
    appId: "1:984914174548:web:b281c41c3a6687132043c1",
  
    measurementId: "G-FP1WF88GNS"


};


// Initialize Firebase

const fire = initializeApp(Fire);

const analytics = getAnalytics(fire);
export const db=getFirestore(fire);

