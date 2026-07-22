/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-btn i");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");


    // Change hamburger icon to X
    if(navLinks.classList.contains("active")){

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    }else{

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});



/* ==========================================
   CLOSE MENU AFTER CLICKING LINK
========================================== */


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");


        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});



/* ==========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================== */


document.addEventListener("click",(event)=>{


    if(!menuBtn.contains(event.target) && 
       !navLinks.contains(event.target)){


        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }


});



/* ==========================================
   RESPONSIVE MENU RESET
========================================== */


window.addEventListener("resize",()=>{


    if(window.innerWidth > 900){

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }


});



/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */


const reveals = document.querySelectorAll(".reveal");


function revealSections(){


    reveals.forEach(section=>{


        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;


        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }


    });


}


window.addEventListener("scroll",revealSections);

revealSections();




/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */


const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{


    let current = "";


    sections.forEach(section=>{


        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });



});




/* ==========================================
   BACK TO TOP BUTTON
========================================== */


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }


});



topBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});