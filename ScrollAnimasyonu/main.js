const contents = document.querySelectorAll('.content')
window.addEventListener('scroll', (checkContents))
checkContents()
function checkContents() {
    console.log("first")
    const triggerBottom = (window.innerHeight / 6) * 4
    contents.forEach(item => {
        const itemBox = item.getBoundingClientRect().top;
        console.log("itemBoxTOOP", itemBox)
        itemBox < triggerBottom ? item.classList.add('show') : item.classList.remove('show')
    })
}