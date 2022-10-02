const textareaEl = document.querySelector("#textarea")
const tagsEl = document.querySelector('#tags')
const tags = document.querySelectorAll('.tags')
textareaEl.addEventListener("keyup", (e) => {

  createTags(e.target.value)
  if (e.key === "Enter" && e.target.value.length > 1) {
    getRandomTag()
    e.target.value = ""
  }


})
function createTags(input) {
  const tags = input.split(',').filter(tag => tag !== "").map(tag => tag.trim());
  addTagsToHtml(tags)
}

function addTagsToHtml(tags) {
  tagsEl.innerHTML = ''
  tags.forEach(tag => {
    const span = document.createElement('span')
    span.classList.add("tag")
    span.innerText = tag
    tagsEl.appendChild(span)
  });
}
function getRandomTag() {
  const interval = setInterval(() => {
    const tag = pickRandomTag()
    togleClass(tag)
    setTimeout(() => {
      togleClass(tag)
    }, 100);
  }, 100);
  setTimeout(() => {
    const tag = pickRandomTag()
    togleClass(tag)
    clearInterval(interval)
  }, 5000);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  const randomTag = tags[Math.floor(tags.length * Math.random())]
  return randomTag
}

function togleClass(tag) {
  tag.classList.contains('higlight') ? tag.classList.remove("higlight") : tag.classList.add("higlight");
}