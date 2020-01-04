// const hamburger = document.querySelector("#hamburger");
const hamburger = document.querySelector("label");
hamburger.addEventListener("click", addOpen);
function addOpen(e) {
	e.currentTarget.classList.toggle("open");
}
