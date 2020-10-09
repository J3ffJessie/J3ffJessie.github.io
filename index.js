$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('header').addClass('nav-show');
  } else {
    $('header').removeClass('nav-show');
  }
})

const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".nav-bar");
  const navLinks = document.querySelector(".nav-bar li");

  hamburger.onclick = () => {
    navbar.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
      }
    });
    hamburger.classList.toggle("toggle");

  }
};


let theme = true;


function changeTheme() {
  theme = !theme
  console.log(theme);
  theme ? lightTheme() : darkTheme()
}


// use this for changing variable colors and making the theme light on click of toggle
// Light Mode Colors
// :root {
// 	--main-background: #033349;
// 	--main-fonts-color: #fff;
// 	--main-decor-color: #fe8138;
// 	--main-header-background: #8f532f;
// 	--main-font-family: 'Poppins', sans-serif;
// 	--main-background-image: url("/Images/dark-grey-terrazzo.png") no-repeat;
// }

function lightTheme() {
  document.documentElement.style.setProperty('--main-background', '#033349');
  document.documentElement.style.setProperty('--main-fonts-color', '#fff');
  document.documentElement.style.setProperty('--main-decor-color', '#fe8138');
  document.documentElement.style.setProperty('--main-header-background', '#8f532f');
};

/* 
Dark Mode Colors, complimentary to light mode colors
--main-background: #491a03;
--main-fonts-color: #000000;
--main-decor-color: #38a1fe;
--main-header-background: #2f5f8f; */

function darkTheme() {
  document.documentElement.style.setProperty('--main-background', '#e6250a');
  document.documentElement.style.setProperty('--main-fonts-color', '#fff');
  document.documentElement.style.setProperty('--main-decor-color', '#38a1fe');
  document.documentElement.style.setProperty('--main-header-background', '#2f5f8f');

};





window.onload = () => navSlide();
changeTheme();