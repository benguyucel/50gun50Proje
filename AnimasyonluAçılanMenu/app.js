const navbar = document.querySelector('#navbar')
const button = document.getElementById('navButton')
button.addEventListener('click',()=>{
   navbar.classList.toggle('active')
})