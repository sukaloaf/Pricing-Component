const toggle = document.querySelector("#toggle");
const monthlyElements = document.querySelectorAll(".monthly");
const yearlyElements = document.querySelectorAll(".yearly");

toggle.addEventListener("click", () => {
  if (toggle.checked == true) {
    yearlyElements.forEach((element) => {
      element.style.display = "none";
    });
    monthlyElements.forEach((element) => {
      element.style.display = "block";
    });
  } else {
    yearlyElements.forEach((element) => {
      element.style.display = "block";
    });
    monthlyElements.forEach((element) => {
      element.style.display = "none";
    });
  }
});
