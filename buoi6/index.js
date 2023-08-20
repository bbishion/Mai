import { auth, dangky } from './firebaseConfig.js'

let email = document.querySelector('#form3Example3c')
let password = document.querySelector('#form3Example4c')
let signup = document.querySelector('.signup')

signup.addEventListener("click", () => {
    console.log(auth)
    console.log(email.value)
    console.log(password.value)
    dangky(auth, email.value, password.value)
})


console.log(auth)
console.log(password)
console.log(signup)


