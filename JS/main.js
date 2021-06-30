const slides = document.querySelectorAll(".slide");
const auto = true;
const inter = 3000;

let slideInter;

const nextSlide = () => {
  const current = document.querySelector(".current");
  
  current.classList.remove("current");
  

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current")); 
};

if (auto) {
  slideInter = setInterval(nextSlide, inter);
}

//Second Slider

const slides2 = document.querySelectorAll(".slide2");
const on = true;
const t = 3000;

let frec;

const moveSlide = () => {
  const current2 = document.querySelector(".current2");
  current2.classList.remove("current2");

  if (current2.nextElementSibling) {
    current2.nextElementSibling.classList.add("current2");
  } else {
    slides2[0].classList.add("current2");
  }
  setTimeout(() => current2.classList.remove("current2"));
};

if (on) {
  frec = setInterval(moveSlide, t);
}

