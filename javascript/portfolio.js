const btn =document.querySelector(".menu-btn")
const nav=document.getElementById("navbar-hamburger")
const image = document.getElementById('imageChange');
const bgHeader=document.querySelector(".header-bg")
const about=document.querySelector(".about")
const menuAnimate=document.querySelector(".menu-animate")
btn.addEventListener("click",toggleMenu)
about.addEventListener("click",collapseMenu)

function collapseMenu() {
    bgHeader.classList.remove("blueBg")
    nav.classList.add("hide")

}
function toggleMenu(){
nav.classList.toggle("hide")
bgHeader.classList.toggle("blueBg")
image.src = '../img/close.png';
}