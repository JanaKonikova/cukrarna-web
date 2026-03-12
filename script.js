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
// Zobrazit další / zpět
const showMoreBtn = document.getElementById('showMoreBtn');
const backBtn = document.getElementById('backBtn');
const mainCakes = document.getElementById('main-cakes');
const categoriesSection = document.getElementById('categories-section');

showMoreBtn.addEventListener('click', e => {
  e.preventDefault();
  mainCakes.style.display = 'none';
  categoriesSection.style.display = 'block';
});

backBtn.addEventListener('click', e => {
  e.preventDefault();
  categoriesSection.style.display = 'none';
  mainCakes.style.display = 'block';
});

// klik na kategorii → zobrazí/skrýt galerii
document.querySelectorAll('.category-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const gallery = btn.nextElementSibling;
    gallery.style.display = (gallery.style.display==='flex') ? 'none' : 'flex';
  });
});
