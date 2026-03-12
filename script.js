// Smooth scroll
document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
        navMenu.classList.remove('show'); // zavře menu po kliknutí
    });
});
// Button
const btn = document.getElementById("menuBtn")
const menu = document.getElementById("menu")

btn.onclick = () => {

menu.classList.toggle("active")

}
