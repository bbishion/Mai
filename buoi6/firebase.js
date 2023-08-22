import { auth, dangnhap } from './firebaseConfig.js'

let email = document.querySelector('#form3Example3')
let password = document.querySelector('#form3Example4')
let signIn = document.querySelector('.signIn')

signIn.addEventListener("click", () => {
    console.log(auth)
    console.log(email.value)
    console.log(password.value)
    dangnhap(auth, email.value, password.value)
})


console.log(auth)
console.log(password)
console.log(signIn)
console.log(email)

