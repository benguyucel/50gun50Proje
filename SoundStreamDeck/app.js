const buttons = ["applause", "boo", "gasp", "tada", "victory", "wrong"]
buttons.forEach(name => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerHTML = name
    btn.addEventListener('click', () => {
        stopSound()
        document.getElementById(name).play()
    })
    document.getElementById('buttons').appendChild(btn)
})
function stopSound() {
    buttons.forEach(name => {
        const song = document.getElementById(name)
        song.pause()
    })
}