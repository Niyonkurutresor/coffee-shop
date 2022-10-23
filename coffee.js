/*--------------------------------\
|              variables           |
\--------------------------------*/
let bagle = document.querySelector(".fa-bars"); 
let asideMenu = document.querySelector(".aside_navigation");
let switchMode = document.querySelector(".fa-adjust");
let preloader = document.querySelector(".preloader");


bagle.addEventListener("click", ()=>{

    asideMenu.classList.toggle("unhide")
});

switchMode.addEventListener("click",()=>{
    document.classList.toggle("main");
    alert("you made it")
})

window.addEventListener("load",()=>{
    preloader.style.display = "none"
})