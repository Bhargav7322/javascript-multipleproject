const form = document.querySelector("form");
form.addEventListener("click", function (e) {
  e.preventDefault();
  const input = document.querySelector("input");
  const convertedWeight = document.querySelector("span");
  let kgTOpound;

  if ((isNaN(input.value)) || input.value <= 0) {
    convertedWeight.classList.add("error");
    convertedWeight.innerHTML = "<p>Pls enter a vaild number</p>";

    setTimeout(() => {
      convertedWeight.innerHTML = "";
      convertedWeight.classList.remove("error");
    }, 2000);
    input.value = "";
  } else {
    kgTOpound = Number(input.value) * 2.20462;
    convertedWeight.classList.add("successful");
    convertedWeight.innerHTML = `${kgTOpound.toFixed(3)}`;

    setTimeout(() => {
      convertedWeight.innerHTML = "";
      convertedWeight.classList.remove("error");
      input.value = ""
    }, 10000);
  }
});

