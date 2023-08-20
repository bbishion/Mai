import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js'
const firebaseConfig = {
    apiKey: "AIzaSyB-emX7BoGXo3V74-Fis6dCc4QX2IVO8CU",
    authDomain: "spck-mai.firebaseapp.com",
    projectId: "spck-mai",
    storageBucket: "spck-mai.appspot.com",
    messagingSenderId: "222600858481",
    appId: "1:222600858481:web:1fef48b2c656eaef6dc4d0",
    measurementId: "G-YD4RRJCHXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const dangky = (auth, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            alert('dang ki thanh cong')
        })
        .catch((error) => {
            alert('dang ki that bai')
            console.log(error.code)
        })
}
