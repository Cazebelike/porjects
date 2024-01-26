const bnt = document.querySelector(".button");
const buy = document.querySelector(".buying");
bnt.addEventListener("click", () => {
  buy.classList.toggle("buying-hover");
  console.log(bnt);
});
