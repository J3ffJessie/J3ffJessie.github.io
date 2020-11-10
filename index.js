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
};

function lightTheme() {
  document.documentElement.style.setProperty('--main-background', '#033349');
  document.documentElement.style.setProperty('--main-fonts-color', '#fff');
  document.documentElement.style.setProperty('--main-decor-color', '#fe8138');
  document.documentElement.style.setProperty('--main-header-background', '#8f532f');
  document.getElementById('themed').innerHTML= '&#127773';
};

function darkTheme() {
  document.documentElement.style.setProperty('--main-background', '#e6250a');
  document.documentElement.style.setProperty('--main-fonts-color', '#fff');
  document.documentElement.style.setProperty('--main-decor-color', '#38a1fe');
  document.documentElement.style.setProperty('--main-header-background', '#2f5f8f');
  document.getElementById('themed').innerHTML = '&#127770';
};



window.onload = () => navSlide();
changeTheme();