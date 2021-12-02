var slideIndex = -1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n - 1));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("skillSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = n;
  }
  if (n < 1) {
    slideIndex = 0;
  }
  if (n > 3) {
    slideIndex = 0;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slideIndex);
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}
var canShow = false;
showDialog(canShow);

function aboutMePressed() {
  if (canShow) {
    canShow = false;
    showDialog(false);
  } else {
    canShow = true;
    showDialog(true);
  }
}

function showDialog(canShow) {
  var dialog = document.getElementsByClassName("dialogDiv")[0];
  if (canShow) {
    dialog.style.display = "block";
  } else {
    dialog.style.display = "none";
  }
}
