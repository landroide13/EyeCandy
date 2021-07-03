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
const t = 4000;

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

//Modals

// Get the modal
var modal = document.getElementById("modal1");
var img = document.getElementById("myImg1");

var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal.style.display = "none";
}

var modal2 = document.getElementById("modal2");
var img2 = document.getElementById("myImg2");
img2.onclick = function () {
  modal2.style.display = "block";
}

var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
};


var modal3 = document.getElementById("modal3");
var img3 = document.getElementById("myImg3");
img3.onclick = function () {
  modal3.style.display = "block";
}

var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
  modal3.style.display = "none";
};


var modal4 = document.getElementById("modal4");
var img4 = document.getElementById("myImg4");
img4.onclick = function () {
  modal4.style.display = "block";
}

var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on <span> (x), close the modal
span4.onclick = function () {
  modal4.style.display = "none";
};




