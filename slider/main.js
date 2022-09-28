let items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('click', () => {
        removeClass()
        item.classList.add('active')
    })
})

const removeClass = () => {
    items.forEach(item => {
        item.classList.remove('active')

    })
}