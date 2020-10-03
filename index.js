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


function changeTheme(){
  console.log(theme);
  theme = !theme
  console.log(theme);
  theme ? darkTheme(): lightTheme()
}


// use this for changing variable colors and making the theme light on click of toggle
function lightTheme() {
  document.documentElement.style.setProperty('--main-background', '#d3d6df');
  document.documentElement.style.setProperty('--main-fonts-color', 'black');
  document.documentElement.style.setProperty('--main-decor-color', '#00b1ec');
  document.documentElement.style.setProperty('--main-header-background', '#bbc1cf');
};

function darkTheme() {
  document.documentElement.style.setProperty('--main-background', '#0b0c0f');
  document.documentElement.style.setProperty('--main-fonts-color', '#fff');
  document.documentElement.style.setProperty('--main-decor-color', '#00a9e2');
  document.documentElement.style.setProperty('--main-header-background', '#21252e');
};





window.onload = () => navSlide();