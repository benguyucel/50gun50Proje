const circles = document.querySelectorAll(".circle")
const progress = document.querySelector('.progress')
const nextBtn = document.querySelector('.btn.next')
const prevBtn = document.querySelector('.btn.prev')

let currentActive = 1
nextBtn.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})


prevBtn.addEventListener('click', () => {
    currentActive--
    console.log(currentActive)
    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})

const update = () => {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100 + "%")
    if (currentActive === 1) {
        prevBtn.disabled = true
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true
    } else {
        nextBtn.disabled = false
        prevBtn.disabled = false
    }

}