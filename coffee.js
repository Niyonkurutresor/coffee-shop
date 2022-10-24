/*--------------------------------\
|              variables           |
\--------------------------------*/
let bagle = document.querySelector(".fa-bars"); 
let asideMenu = document.querySelector(".aside_navigation");
let switchMode = document.querySelector(".fa-adjust");
let preloader = document.querySelector(".preloader");
let picture = document.querySelectorAll(".divp")


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

for(let i=0;i< picture.length; i++)
picture[i].addEventListener("click",()=>{
    picture[i].classList.add("try");
})
