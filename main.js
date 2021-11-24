const slides = document.querySelectorAll(".slide");

slides.forEach((slide, idx) => {
  let threshold = 0.6;
  console.log("Index", idx);
  let prevSlide = slides.item([idx - 1]);

  if (prevSlide && prevSlide.classList.contains("white")) {
    console.log("Setting threshold to 0");
    threshold = 0;
  }

  console.log("Threshold", threshold);
  new Watch(slide, {
    threshold: threshold,
  }).inView(() => {
    const image_id = slide.dataset.image;
    const image_div = document.querySelector(`[data-id='${image_id}']`);
    const active_image_div = document.querySelector(".image.active");

    if (active_image_div) {
      active_image_div.classList.remove("active");
    }

    if (image_div) {
      image_div.classList.add("active");
    }
  });
});