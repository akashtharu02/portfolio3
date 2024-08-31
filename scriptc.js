// JavaScript for Navbar Toggle
function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// JavaScript for Typed.js
var typed1 = new Typed(".text1", {
    strings: ["It's me."],
    startDelay:300,
    typeSpeed: 130,
    
    loop: false
});

var typed2 = new Typed(".text2", {
    strings: ["Akash Tharu"],
    typeSpeed: 130,
    startDelay:20,
    loop: false
});

var typed3 = new Typed(".text3", {
    strings: ["Full-Stack Developer", "Web Developer", "Graphic Designer"],
    typeSpeed: 120,
    backSpeed: 100,
    backDelay: 1200,
    loop: true
});
