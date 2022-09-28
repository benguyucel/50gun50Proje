const search = document.querySelector('.search')
const button = document.querySelector('.btn')
const searchInput = document.querySelector('#searchInput')
button.addEventListener('click', () => {
    search.classList.toggle('active')
    search.focus()
})