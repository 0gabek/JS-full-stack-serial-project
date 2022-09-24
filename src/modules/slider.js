function slider() {
  // SLIDER
  const slides = document.querySelectorAll(".offer__slide"),
    slider = document.querySelector(".offer__slider"),
    prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    current = document.querySelector("#current"),
    total = document.querySelector("#total"),
    slidesWrapper = document.querySelector(".offer__slider-wrapper"),
    width = window.getComputedStyle(slidesWrapper).width,
    slidesField = document.querySelector(".offer__slider-inner");

  let slideIdx = 1;
  let offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIdx}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIdx;
  }

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.7s ease all";
  slidesWrapper.style.overflow = "hidden";
  slides.forEach((slide) => {
    slide.style.width = width;
  });

  const indicators = document.createElement("ol");
  const dots = [];
  indicators.classList.add("carousel_indicators");
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("carousel_dot");
    i === 0 && (dot.style.opacity = 1);
    indicators.append(dot);
    dots.push(dot);
  }

  function removeNotNumber(str) {
    return +str.slice(0, width.length - 2);
  }

  next.addEventListener("click", () => {
    offset === removeNotNumber(width) * (slides.length - 1)
      ? (offset = 0)
      : (offset += removeNotNumber(width));

    slidesField.style.transform = `translateX(-${offset}px)`;
    slideIdx === slides.length ? (slideIdx = 1) : slideIdx++;
    slides.length < 10
      ? (current.textContent = `0${slideIdx}`)
      : (current.textContent = slideIdx);

    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[slideIdx - 1].style.opacity = 1;
  });

  prev.addEventListener("click", () => {
    offset === 0
      ? (offset = removeNotNumber(width) * (slides.length - 1))
      : (offset -= removeNotNumber(width));

    slidesField.style.transform = `translateX(-${offset}px)`;
    slideIdx === 1 ? (slideIdx = slides.length) : slideIdx--;
    slides.length < 10
      ? (current.textContent = `0${slideIdx}`)
      : (current.textContent = slideIdx);

    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[slideIdx - 1].style.opacity = 1;
  });

  dots.forEach((dot) => (dot.style.opacity = ".5"));
  dots[slideIdx - 1].style.opacity = 1;
  dots.forEach((dot) =>
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIdx = slideTo;
      offset = removeNotNumber(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      dots.forEach((dot) => (dot.style.opacity = ".5"));
      dots[slideIdx - 1].style.opacity = 1;

      slides.length < 10
        ? (current.textContent = `0${slideIdx}`)
        : (current.textContent = slideIdx);
    })
  );
}
export default slider;
