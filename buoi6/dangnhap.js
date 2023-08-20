import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyB-emX7BoGXo3V74-Fis6dCc4QX2IVO8CU",
    authDomain: "spck-mai.firebaseapp.com",
    projectId: "spck-mai",
    storageBucket: "spck-mai.appspot.com",
    messagingSenderId: "222600858481",
    appId: "1:222600858481:web:1fef48b2c656eaef6dc4d0",
    measurementId: "G-YD4RRJCHXE"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const dangnhap = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('dang nhap thanh cong ')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('dang nhap that bai')
        });
}
