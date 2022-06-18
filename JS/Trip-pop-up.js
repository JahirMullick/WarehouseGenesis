document.getElementById('button_driver').addEventListener("click", function() {
	document.querySelector('.popup-section').style.display = "flex";
});

document.querySelector('.dclose').addEventListener("click", function() {
	document.querySelector('.popup-section').style.display = "none";
});
// document.querySelector('.button').addEventListener("click", function() {
// 	window.close();
// });

document.getElementById('button_truck').addEventListener("click", function() {
	document.querySelector('.truck_popup_section').style.display = "flex";
});

document.querySelector('.tclose').addEventListener("click", function() {
	document.querySelector('.truck_popup_section').style.display = "none";
});
// document.querySelector('.button').addEventListener("click", function() {
// 	window.close();
// });