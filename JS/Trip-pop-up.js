document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.popup-section').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.popup-section').style.display = "none";
});
// document.querySelector('.button').addEventListener("click", function() {
// 	window.close();
// });