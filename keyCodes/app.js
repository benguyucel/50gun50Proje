const container = document.querySelector('.container')
window.addEventListener('keydown', (e) => {
    const { keyCode, key, code } = e
    console.log(keyCode, key, code)
    container.innerHTML = `
    <div class="key">
    <small>event.key</small>
    <div class="code">${keyCode}</div>
  </div>
  <div class="key">
    <small>event.keyCode</small>
    <div class="code">${key === ' ' ? "Space" : key}</div>
  </div>
  <div class="key">
    <small>event.eventCode</small>
    <div class="code">${code}</div>
  </div>
    `
})