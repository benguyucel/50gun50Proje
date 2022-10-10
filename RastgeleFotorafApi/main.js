const container = document.querySelector('.container')
const sourceUrl = `https://source.unsplash.com/random/`
const row = 9
for (let i = 1; i <= row * 3; i++) {
    const randomSize = `${getRandomSize()}x${getRandomSize()}`
    const img = document.createElement('img')
    img.src = sourceUrl + randomSize
    container.appendChild(img)
}
function getRandomSize() {
    return Math.floor(Math.random() * 10) + 300
}