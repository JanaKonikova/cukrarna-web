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
// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

if(target){
target.scrollIntoView({
behavior: "smooth"
});
}

});

});
