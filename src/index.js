
import img from "../assets/logo.png"
import css from "../src/styles.css"

const btn = document.createElement("button")
const input = document.createElement("input")
const input_div = document.createElement("div")
const image = document.createElement("img")
image.src = img
input_div.id = "divInput"
const logo_img = document.getElementById("Logo")
input_div.append(input, btn)
logo_img.append(image, input_div)

btn.addEventListener("click", () => {
    const div = document.createElement("div")
    div.id = "event_div"
    const li = document.createElement("li")
    li.textContent = input.value

    div.append(li)
    logo_img.append(div)

})