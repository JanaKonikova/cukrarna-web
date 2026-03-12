const btn = document.getElementById("menuBtn")
const menu = document.getElementById("menu")

btn.onclick = () => {

menu.classList.toggle("active")

}

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", () => {

menu.classList.remove("active")

})

})

