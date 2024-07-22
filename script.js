const header = document.querySelector("header");

window.addEventListener ("scroll" ,  function() {
header.classList.toggle("sticky",windows.scrollY>150);
});
let menu = document.querySelector('#menu-icon');
let navliks = document.querySelector('.navlinks');

menu.onclick = () => {
    menu.ClassList.toogle(bx-x);
    navliks.ClassList.toggle('open');
}
window.onscroll = () => {
    menu.classList.remove(bx-x);
    navliks.classList.remove('open');
}