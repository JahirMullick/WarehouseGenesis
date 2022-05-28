const indicator = document.querySelector(".indicator");
const input = document.querySelector(".chinput");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const hideShowBtn = document.querySelector(".hideShowBtn");

let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.*[!@#$%^&*()?_~-]/;
let level = 0;

let loginUserid = "";

// Password check function.
function trigger() {
	if (input.value != "") {
		indicator.style.display = "block";
		indicator.style.display = "flex";

		// Password check level 1
		if (input.value.match(regExpWeak) ||
			input.value.match(regExpMedium) ||
			input.value.match(regExpStrong))
			level = 1;

		// Password check level 2
		if (((input.value.match(regExpWeak) && input.value.match(regExpMedium)) ||
			(input.value.match(regExpMedium) && input.value.match(regExpStrong)) ||
			(input.value.match(regExpWeak) && input.value.match(regExpStrong))))
			level = 2;

		// Password check level 3
		if (input.value.match(regExpWeak) &&
			input.value.match(regExpMedium) &&
			input.value.match(regExpStrong))
			level = 3;

		// Password check level 1 css.
		if (level == 1) {
			weak.classList.add("active");
			text.style.display = "block";
			text.textContent = "Your password is too week";
			text.classList.add("weak");
		}

		// Password check level 2 css.
		if (level == 2) {
			medium.classList.add("active");
			text.textContent = "Your password is medium";
			text.classList.add("medium");
		} else {
			medium.classList.remove("active");
			text.classList.remove("medium");
		}

		// Password check level 3 css.
		if (level == 3) {
			medium.classList.add("active");
			strong.classList.add("active");
			text.textContent = "Your password is strong";
			text.classList.add("strong");
		} else {
			strong.classList.remove("active");
			text.classList.remove("strong");
		}

		// Show/Hide password button css
		hideShowBtn.style.display = "block";
		hideShowBtn.onclick = function () {
			if (input.type == "password") {
				input.type = 'text';
				hideShowBtn.textContent = "HIDE";
			} else {
				input.type = 'password';
				hideShowBtn.textContent = "SHOW";
			}
		}

	} else {
		indicator.style.display = "none";
		text.style.display = "none";
		hideShowBtn.style.display = "none";
	}
}

// Check Password both are match or not.
function checkPassword() {
	let password = document.getElementById("password").value;
	let confirmpassword = document.getElementById("confirm").value;
	console.log(password, confirmpassword);
	let message = document.getElementById("message");

	if (password.length != 0) {
		if (password == confirmpassword) {
			message.textContent = "Passwords match";
			message.style.backgroundColor = "#3ae374";
			message.style.borderRadius = "8px";
		}
		else {
			message.textContent = "Passwords don't match";
			message.style.backgroundColor = "#ff4d4d";
			message.style.borderRadius = "8px";
		}
	}
	else {
		alert("Password can't be empty!");
		message.textContent = "";
	}
}

const request = new XMLHttpRequest();

function Get_Request() {
	let mess = document.getElementById("oldMessage");
	let pdata = String(document.getElementById("oldP").value);
	request.open("GET", `http://localhost:3000/admin?password=${pdata}`);
	request.send();

	request.onload = function () {
		if (request.response != "[]") {
			console.log(request.response);
			Put_Request();
			function Put_Request() {

				let putData = String(document.getElementById('confirm').value);
				let url = '{ "id": 1, "username": "admin", "password": "'+ putData +'"}';
				request.open("PUT", "http://localhost:3000/admin/1");
				request.setRequestHeader('Content-Type', 'application/json');
				request.send(url);
				loginUserid = url;

				request.onload = function () {
					if (request.status == 200 || request.status == 304) {
						
						console.log("Put request send successfully");
					}
					else {
						console.log("Wrong URL!");
					}
				}
				console.log(loginUserid);
			}

		}
		else {
			mess.textContent = "Passwords don't match";
			mess.style.color = "#ff4d4d";
			mess.style.borderRadius = "8px";
			mess.style.margin = "2px 0px 0px -16px";
			mess.style.fontSize = "15px";
			mess.style.fontWeight = "500";
		}
	}
}



