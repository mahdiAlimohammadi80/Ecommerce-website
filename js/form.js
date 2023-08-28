
const container = document.querySelector('.container');
const toRegisterBtn = document.querySelector('.to-register-btn');
const toLoginBtn = document.querySelector('.to-login-btn');

toRegisterBtn.addEventListener('click',()=>{
    container.classList.add('register');
})

toLoginBtn.addEventListener('click',()=>{
    container.classList.remove('register');
})