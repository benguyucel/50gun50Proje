const content = document.getElementById('content')
const speedEl = document.getElementById('speed')
const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quisquam aperiam error officia ? Quo quibusdam accusamus ullam facilis omnis, aspernatur beatae."
let idx = 1
let speed = 100 / speedEl.value
const initTextAnimate = () => {
    content.innerText = text.slice(0, idx)
    idx++
    if (idx > text.length) {
        return
    }
    setTimeout(initTextAnimate, speed)
}

initTextAnimate()
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)
