//slideshow function
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";
}

setInterval(function() {
  plusSlides(1);
}, 3000); //Slide inteval; 1000 = 1s



//function to only allow one collapsible to expand at a time
document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".button");
  const expandableContents = document.querySelectorAll(".gri");

  toggleButtons.forEach((toggleButton, index) => {
      const expandableContent = expandableContents[index];

      toggleButton.addEventListener("click", () => {
          expandableContents.forEach((content, contentIndex) => {
              if (contentIndex !== index) {
                  content.style.maxHeight = "0px";
              }
          });

          const isExpanded = expandableContent.style.maxHeight && expandableContent.style.maxHeight !== "0px";
          expandableContent.style.maxHeight = isExpanded ? "0px" : `${expandableContent.scrollHeight}px`;
      });
  });
});
