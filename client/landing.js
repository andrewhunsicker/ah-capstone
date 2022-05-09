const userContainer = document.querySelector('#user-info')
const loginForm = document.querySelector('#login-form')
const registerForm = document.querySelector('#register-form')

const baseURL = `http://localhost:4004/api`

const login = res => /*axios.post(`${baseURL}/login`, body)
.then( res => */
{
  createUserCard(res.data)
  location.href = 'http://127.0.0.1:5500/client/main.html'
}

const register = body => axios.post(`${baseURL}/register`, body).then(res => {
  createUserCard(res.data)
}).catch(err => {
  console.log(err)
  alert('Uh oh. Your request did not work.')
})

function loginSubmitHandler(e) {
  e.preventDefault()
  
  let username = document.querySelector('#login-username')
  let password = document.querySelector('#login-password')
  
  let bodyObj = {
    username: username.value,
    password: password.value
  }
  
  axios.post(`http://localhost:4004/api/login`, bodyObj)
  .then (res => {
    console.log(res.data)
    login(res)
  })
 
  username.value = ''
  password.value = ''
}


  

function registerSubmitHandler(e) {
  e.preventDefault()
  
  let username = document.querySelector('#register-username')
  let email = document.querySelector('#register-email')
  let firstName = document.querySelector('#register-firstName')
  let lastName = document.querySelector('#register-lastName')
  let password = document.querySelector('#register-password')
  let password2 = document.querySelector('#register-password-2')
  
  if (password.value !== password2.value) {
    alert("Your passwords need to match.")
    return
  }
  if (password.value.length < 8) {
    alert("must have 8 characters")
    return 
  }
  let regex1 = /^(?=.*[a-z]).+$/;
  let regex2 = /^(?=.*[A-Z]).+$/;
  let regex3= /^(?=.*[0-9_\W]).+$/;
  let regex4 = /^(?=.*[~!@#$%^&*()_+{}.,';:]).+$/;

  if( regex1.test(password.value) ) {
       regex1 = true
  }else{
    alert("must include lowecase letter.")
  }


  if( regex2.test(password.value) ) {
       regex2 = true
  }else{
    alert("must include one uppercase letter.")
  }


  if( regex3.test(password.value) ) {
      regex3 = true
  }else{
    alert("must include one number.")
  }

  if( regex4.test(password.value) ) {
     regex4 = true
}else{
  alert("must include special character.")
}

  let bodyObj = {
    username: username.value,
    email: email.value,
    firstName: firstName.value,
    lastName: lastName.value,
    password: password.value
  }
   if(regex1 && regex2 && regex3 && regex4 === true)

  axios.post(`http://localhost:4004/api/register`, bodyObj)
  .then (res => {
    console.log(res.data)
  })
  
  username.value = ''
  email.value = ''
  firstName.value = ''
  lastName.value = ''
  password.value = ''
  password2.value = ''
  

 

  }




function createUserCard(data) {
  userContainer.innerHTML = ''
  const userCard = document.createElement('div')
  userCard.classList.add('user-card')
  
  userCard.innerHTML = `<p class="username">username: ${data.username}</p>
  <p class="email">Email: ${data.email}</p>
  <p class="first-name">First Name: ${data.firstName}</p>
  <p class="last-name">Last Name: ${data.lastName}</p>
  `
  
  
  userContainer.appendChild(userCard)
}




loginForm.addEventListener('submit', loginSubmitHandler)

registerForm.addEventListener('submit', registerSubmitHandler)