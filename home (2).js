

// function isTransformedOnce() {
//     if (getComputedStyle(document.getElementById("group")).transform = "translateX(0%)") {
//         return true;
//     }
// }

// function isTransformed() {
//     if (getComputedStyle(document.getElementById("group")).transform = "translateX(-75%)") {
//         return true;
//     }
// }

function animateSlides() {
    setTimeout(function () {
        document.getElementById("group").style.transform = "translateX(-25%)";
    }, 3000);
    setTimeout(function () {
        document.getElementById("group").style.transform = "translateX(-50%)"
    }, 7000);
    setTimeout(function () {
        document.getElementById("group").style.transform = "translateX(-75%)"
    }, 11000);
    setTimeout(function () {
        document.getElementById("group").style.transform = "translateX(0%)"
    }, 15000);
}

function animate() {
  animateSlides();
  myFunction();
}

var myVar;

function myFunction() {
  myVar = setInterval(animateSlides, 16000);
}

window.addEventListener("load", animate);

function menuHover() {
    document.getElementById("line").style.width = "56px";
}

function menuOut() {
    document.getElementById("line").style.width = "0px";
}

function menuHover2() {
    document.getElementById("line2").style.width = "68px";
}

function menuOut2() {
    document.getElementById("line2").style.width = "0px";
}

function menuHover3() {
    document.getElementById("line3").style.width = "68px";
}

function menuOut3() {
    document.getElementById("line3").style.width = "0px";
}


function wipe() {
    document.getElementById("wipe-on").style.width = "0px"
}

const bloomberg = document.getElementById("bloomberg");
const aj = document.getElementById("aj");
const arVr = document.getElementById("ar-vr");

function showProject1() {
    bloomberg.classList.remove("hide");
    aj.classList.add("hide");
    arVr.classList.add("hide");
}

function showProject2() {
    bloomberg.classList.add("hide");
    aj.classList.remove("hide");
    arVr.classList.add("hide");
}

function showProject3() {
    bloomberg.classList.add("hide");
    aj.classList.add("hide");
    arVr.classList.remove("hide");
}


function validate(){
    var password = document.getElementById("password").value;
    if ( password == "lucky") {
        document.getElementById("member-portfolio").classList.remove("hide");
        document.getElementById("login").style.display = "none";
        return false;
    } else{
        alert("The password you entered was incorrect");
        return false;
    }
}

function displayMenu() {
    document.getElementById("mobile-menu").classList.remove("hide");
    document.getElementById("x").style.display = "block";
    document.getElementById("hamburger-button").style.display = "none";
}


function hideMenu() {
    document.getElementById("mobile-menu").classList.add("hide");
    document.getElementById("x").style.display = "none";
    document.getElementById("hamburger-button").style.display = "block";
}

// window.addEventListener('click' , function(e){   
//     if (!document.getElementById('hamburger-button').contains(e.target)){
//       hideMenu();
//     } else {
//         displayMenu();
//     }
//   });

