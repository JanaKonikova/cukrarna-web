// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');
hamburger.addEventListener('click', ()=>{navMenu.classList.toggle('show');});

// Smooth scroll
document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
        navMenu.classList.remove('show'); // zavře menu po kliknutí
    });
});
