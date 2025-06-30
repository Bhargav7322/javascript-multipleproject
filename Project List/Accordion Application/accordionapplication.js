const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  console.log("accordion", accordion.classList);
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
  });
});
