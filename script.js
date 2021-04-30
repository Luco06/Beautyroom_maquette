let img1 = document.getElementById("card-img1");
let img2 = document.getElementById("card-img2");
let img3 = document.getElementById("card-img3");
let img4 = document.getElementById("card-img4");
let img5 = document.getElementById("card-img5");

let card_body1 = document.getElementById("card-body1");
let card_body2 = document.getElementById("card-body2");
let card_body3 = document.getElementById("card-body3");
let card_body4 = document.getElementById("card-body4");
let card_body5 = document.getElementById("card-body5");

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");

img1.addEventListener("click",() => {
    if(getComputedStyle(card_body1).display != "none"){
        card_body1.style.display ="none";
        card1.style.height ="250px"
    }else{
        card_body1.style.display ="block";
        card1.style.height ="478px"
    }
})
img2.addEventListener("click",() =>{
    if(getComputedStyle(card_body2).display != "none"){
        card_body2.style.display ="none";
        card2.style.height ="250px"
    }else{
        card_body2.style.display ="block";
        card2.style.height ="478px"
    }
})
img3.addEventListener("click",() =>{
    if(getComputedStyle(card_body3).display != "none"){
        card_body3.style.display ="none";
        card3.style.height ="250px"
    }else{
        card_body3.style.display ="block";
        card3.style.height ="478px"
    }
})
img4.addEventListener("click",() =>{
    if(getComputedStyle(card_body4).display != "none"){
        card_body4.style.display ="none";
        card4.style.height ="250px"
    }else{
        card_body4.style.display ="block";
        card4.style.height ="478px"
    }
})
img5.addEventListener("click",() =>{
    if(getComputedStyle(card_body5).display != "none"){
        card_body5.style.display ="none";
        card5.style.height ="250px"
    }else{
        card_body5.style.display ="block";
        card5.style.height ="478px"
    }
})

function open(){
    if(getComputedStyle(card_body1).display !="none"){
        card_body1.style.display ="none";
        card1.style.height ="250px"
    }else{
        card_body1.style.display ="block";
        card1.style.height ="478px"
    }
};
function open2(){
    if(getComputedStyle(card_body2).display !="none"){
        card_body2.style.display ="none";
        card2.style.height ="250px"
    }else{
        card_body2.style.display ="block";
        card2.style.height ="478px"
    }
};
function open3(){
    if(getComputedStyle(card_body3).display !="none"){
        card_body3.style.display ="none";
        card3.style.height ="250px"
    }else{
        card_body3.style.display ="block";
        card3.style.height ="478px"
    }
};
function open4(){
    if(getComputedStyle(card_body4).display !="none"){
        card_body4.style.display ="none";
        card4.style.height ="250px"
    }else{
        card_body4.style.display ="block";
        card4.style.height ="478px"
    }
};
function open5(){
    if(getComputedStyle(card_body5).display !="none"){
        card_body5.style.display ="none";
        card5.style.height ="250px"
    }else{
        card_body5.style.display ="block";
        card5.style.height ="478px"
    }
};

