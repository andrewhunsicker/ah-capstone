const userContainer = document.querySelector('#user-info')
const loginForm = document.querySelector('#login-form')
const registerForm = document.querySelector('#register-form')

const baseURL = `http://localhost:4004/api`

const login = body => axios.post(`${baseURL}/login`, body).then( res => {
  createUserCard(res.data)
  location.href = 'http://127.0.0.1:5500/client/main.html'
}).catch(err => {
  console.log(err)
  alert('password or username did not match.')
})

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
  
  login(bodyObj)

    //  location.href = 'http://127.0.0.1:5500/client/main.html'

  
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

  register(bodyObj)
  
  username.value = ''
  email.value = ''
  firstName.value = ''
  lastName.value = ''
  password.value = ''
  password2.value = ''
  
  sequelize.query(`
        

  create table users (
      user_id SERIAL PRIMARY KEY,
      username VARCHAR(50),
     first_name VARCHAR(50),
     last_name VARCHAR(50),
     email VARCHAR(50),
     password VARCHAR(50)
  );

  INSERT INTO users (username, first_name, last_name, email, password)
  values ('${username.value}', '${firstName.value}', '${lastName.value}', '${email.value}', '${password.value}');
  `)

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
//  let button = document.getElementById('loginBtn').addEventListener(`click`, (e) => {
//    e.preventDefault(
     
//      location.href = 'http://127.0.0.1:5500/client/main.html'
//    )
// } )
registerForm.addEventListener('submit', registerSubmitHandler)