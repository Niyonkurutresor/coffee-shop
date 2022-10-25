
// loading page (beffore it become loaded)
let preloader = document.querySelector(".preloader_container");


window.addEventListener("load",()=>{
    preloader.style.display = "none";
})


// aside navigation hide and show
let bagle = document.querySelector(".fa-bars"); 
let asideMenu = document.querySelector(".aside_navigation");
        

bagle.addEventListener("click",()=>{
    asideMenu.classList.toggle("unhide");  
});


// switching mode from block to wihite mode
let switchMode = document.querySelector(".fa-adjust");


switchMode.addEventListener("click",()=>{
    document.classList.toggle("main");
    alert("you made it")
})




// zome-in and closing picture
let picture = document.querySelectorAll(".divp");
let minimizePicture = document.querySelector(".minimize_picture");


for(let i=0;i< picture.length; i++)
picture[i].addEventListener("click",()=>{
    
    picture[i].classList.toggle("try");
    minimizePicture.style.display="block";
   

    minimizePicture.addEventListener("click",()=>{
        picture[i].classList.remove("try");
        minimizePicture.style.display="none";
    })
})


// older list of to day
let sendRequest = document.querySelector(".sendRequest");
let requestDivision = document.querySelector(".popupOrder")
let inputForm = document.querySelectorAll(".storage");
let counter = 1


sendRequest.addEventListener("click",()=>{
    

    let description_center = document.createElement("div");
    description_center.classList.add("description_center")

    let older_list = document.createElement("div");
    older_list.classList.add("older_list");
    description_center.append(older_list)

    let picture_of_user = document.createElement("div");
    picture_of_user .classList.add("picture_of_user");
    older_list.append(picture_of_user)

    let name = document.createElement("div");
    name.classList.add("name")
    older_list.append(name)
    

    let firstP = document.createElement("p");
    name.append(firstP)
    
    let secondP = document.createElement("p");
    name.append(secondP);

    let user = document.querySelector("#name");
    let quantity = document.querySelector("#quantity");
    let userEmail = document.querySelector("#email");
    let gender = document.querySelector("#gender");

    firstP.innerText=user.value;
    secondP.innerText= "you nee:"+quantity.value+" cups and your older is NO: " +counter;
     picture_of_user.innerHTML = '<img src="./images/pic 1.jpg" alt="">'  


    if((user.value!=="")&&(quantity.value!=="")&&(userEmail.value!=="")){
        counter+=1;
        requestDivision.append(description_center);
        sendRequest.style.color ="orange";
        user.value=""
        quantity.value=""
        userEmail.value=""
    }

   
})


