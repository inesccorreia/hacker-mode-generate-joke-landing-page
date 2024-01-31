//select the button from the DOM tree
const hackerBtn = document.getElementById("hackerBtn")
const main = document.getElementById("main")
const gif = document.getElementById("gif")
const jokeBtn = document.getElementById("jokeBtn")
const jokeUrl = "https://official-joke-api.appspot.com/jokes/programming/random"
const setUp = document.getElementById("setUp")
const punchline = document.getElementById("punchline")

// ---------------------------

const hackerMode = () => {
  //change background/text color
  main.style.background = "black"
  main.style.color = "chartreuse"
  //swap out the gif
  gif.setAttribute("src", "https://media.giphy.com/media/wwg1suUiTbCY8H8vIA/giphy.gif")
}

const displayJoke = async () => {
  const response = await fetch(jokeUrl)
  const jsonResponse = await response.json()
  setUp.innerText = jsonResponse[0].setup
  punchline.innerText = jsonResponse[0].punchline
}

// ---------------------------


//tell the button to listen for a click event
hackerBtn.addEventListener("click", hackerMode)
jokeBtn.addEventListener("click", displayJoke)