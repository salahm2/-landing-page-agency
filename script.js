console.log("asdasdad");
const ourWork = document.querySelector(".our-work");

const prevBtn = ourWork.querySelector(".slider-btn__left");
const nextBtn = ourWork.querySelector(".slider-btn__right");
const wrapper = ourWork.querySelector(".slider-wrapper");
const slides = wrapper.querySelectorAll(".slides");

let i = 0;
for (const slide of slides) {
  if (i === 0) slide.classList.add("active");
  slide.setAttribute("data-index", i + 1);
  i = i + 1;
}

let transform = 0;

nextBtn.addEventListener("click", () => {
  prevBtn.removeAttribute("disabled");
  const activeSlide = wrapper.querySelector(".slides.active");
  const nextSlide = activeSlide.nextElementSibling;
  const nextSlideActiveAttribute = nextSlide.getAttribute("data-index");
  if (nextSlideActiveAttribute === `${slides.length}`) {
    nextBtn.setAttribute("disabled", "true");
  }
  if (!nextSlide) {
    nextBtn.setAttribute("disabled", "true");
    return;
  }

  activeSlide.classList.remove("active");
  nextSlide.classList.add("active");

  const sliderGap = 40;
  const getSlideWidth = activeSlide.getBoundingClientRect().width;
  const slideWidth = transform + getSlideWidth + sliderGap;
  wrapper.style.transform = `translateX(-${slideWidth}px)`;
  transform = slideWidth;
});
prevBtn.addEventListener("click", () => {
  nextBtn.removeAttribute("disabled");
  const activeSlide = wrapper.querySelector(".slides.active");
  const prevSlide = activeSlide.previousElementSibling;
  const prevSlideAttribute = prevSlide.getAttribute("data-index");
  if (prevSlideAttribute === "1") {
    prevBtn.setAttribute("disabled", "true");
  }
  if (!prevSlide) {
    prevBtn.setAttribute("disabled", "true");
    return;
  }

  activeSlide.classList.remove("active");
  prevSlide.classList.add("active");

  const sliderGap = 40;
  const getSlideWidth = activeSlide.getBoundingClientRect().width;
  console.log("transform: ", transform);
  const slideWidth = transform - (getSlideWidth + sliderGap);
  wrapper.style.transform = `translateX(-${slideWidth}px)`;
  transform = slideWidth;
});
// function sliding(){

// }
// while(){}
// array.forEach(element => );
