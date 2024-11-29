new Glide(".glide", {
  type: "carousel", // Creates a looping carousel
  autoplay: 3000, // Auto-slide every 3 seconds
  rewind: true,
  keyboard: true,
  animationDuration: 800, // Smooth animation duration
  focusAt: "center", // Center the slide
  gap: 0, // No gap between slides
  perView: 1, // slides visible at a time
  breakpoints: {
    1024: {
      perView: 1,
    },
    600: {
      perView: 1,
    },
  },
}).mount();

document.querySelectorAll(".glide__slide").forEach((slide) => {
  const img = slide.querySelector("img");
  slide.style.backgroundImage = `url('${img.src}')`;
});
