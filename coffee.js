
// loading page (beffore it become loaded)
let preloader = document.querySelector(".preloader_container");


window.addEventListener("load",()=>{
    preloader.style.display = "none";
})

// // black and white themo
// let demo = document.querySelector(".fa-adjust");
// let entireDocument = document.querySelector("HTML")
// demo.addEventListener("click",()=>{
//     entireDocument.style.backgroundColor = "black";
//     entireDocument.style.color = "white";
// })

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
    
    picture[i].classList.add("try");
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

    // let functionToPerform = (elementname,elementType,classToAddOn,listToAppendOn)=>{
    //     this.elementname = elementname;
    //     this.elementType = elementType;
    //     this.classToAddOn = classToAddOn;
    //     this.listToAppendOn = listToAppendOn;

    //     this.createElements = ()=>{
    //         let elementname = document.createElement(elementType);
    //         elementname.classList.add(classToAddOn);
    //         listToAppendOn.append(elementname)
    //     }
    // }
 
    // functionToPerform(divisionName,"div","name",older_list);
    // div contain user name and description
    let name = document.createElement("div");
    name.classList.add("name")
    older_list.append(name)
    
    // pragraph indicate name of user
    let firstP = document.createElement("p");
    name.append(firstP)
    
    // paragragy of order description
    let secondP = document.createElement("p");
    name.append(secondP);

    // division that contain button
    let buttons = document.createElement("div");
    buttons.classList.add("buttons");
    older_list.append(buttons);

    // create delete button
    let button1= document.createElement("button");
    button1.innerText= "delet"
    buttons.append(button1);

    // create update button
    let button2 = document.createElement("button");
    button2.innerText = "update";
    buttons.append(button2);

    
    // delet and updatae buttons funcitionality
        // delet funcitionality
        button1.addEventListener("click",()=>{
            older_list.remove();
        })




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
    else{
        alert("you must fill all field")
    }

   
})
