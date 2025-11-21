const button_dark = document.querySelector(".button");
const body = document.body;
button_dark.addEventListener("click",()=>{
    body.classList.toggle("dark_mode");
});
const menu_burg = document.querySelector(".menu_button");
const menu_head = document.querySelector(".menu_header");
menu_burg.addEventListener("click",()=>{
    menu_head.classList.toggle("active")
});