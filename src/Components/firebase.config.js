import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBBtU9IfVacWN7ZVu2xyZ_C4qrJ3wOWRPo",
    authDomain: "bounty-and-threads.firebaseapp.com",
    projectId: "bounty-and-threads",
    storageBucket: "bounty-and-threads.appspot.com",
    messagingSenderId: "200646773470",
    appId: "1:200646773470:web:62943738b5d170c9b5904f",
    measurementId: "G-F6CSEWT4C1"
};
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);