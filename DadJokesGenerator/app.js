const jokeEl = document.querySelector(".jokeText")
const reJoke = document.querySelector("#reJoke")

const getJoke = async () => {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const { joke } = await res.json()
    console.log(joke)
    jokeEl.innerHTML = joke
}
getJoke()
reJoke.addEventListener('click', getJoke)