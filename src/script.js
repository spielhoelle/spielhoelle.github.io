const buttonEle = document.getElementById("trigger")
const closeButtonEle = document.getElementById("close")
const modalEle = document.getElementById("popup")
console.log(buttonEle)
buttonEle.addEventListener("click", (event) => {
	modalEle.classList.toggle("hidden")
})
closeButtonEle.addEventListener("click", (event) => {
	modalEle.classList.toggle("hidden")
})