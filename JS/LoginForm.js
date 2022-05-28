const request = new XMLHttpRequest();

function Get_Request() {
    // This line is extracted Username from login page and convert string Format.  
    let udata = String(document.getElementById("usern").value);
    // This line is extracted Password from login page and convert string Format.  
    let pdata = String(document.getElementById("passw").value);
    request.open("GET", `http://localhost:3000/admin?username=${udata}&password=${pdata}`);
    request.send();

    request.onload = function () {
        if (request.response != "[]") {
            //   This line open the admin dashboard page if the condition is true.
            window.location.href = "/Html/admin dashboard.html";
        }
        else {
            let message = document.getElementById("message");
            message.textContent = "Enter valid Username or Password!";
            message.style.color = "#ff4d4d";
            message.style.borderRadius = "8px";
            message.style.paddingLeft = "20px";
            message.style.fontSize = "17px";
			message.style.fontWeight = "500";
        }
    }
}
