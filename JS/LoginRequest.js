const request = new XMLHttpRequest();

// let jsonObj = {
//     // username : "google.com",
//     // password : "$@110"

// }
// let myJsonStr = JSON.stringify(jsonObj);

// let person = prompt("Please enter your name", "Harry Potter");


function Get_Request() {
    request.open("GET", "http://localhost:3000/admin");
    request.send();

    request.onload = function () {
        let myJsonStr
        let jsonRequest

        if (request.status == 200) {
            myJsonStr = document.getElementById('usern').value, document.getElementById('passw').value;
            // console.log("All Data fatched successfully.");
            // document.getElementById('comments1').value = request.response;
            jsonRequest = request.response;
            if (myJsonStr === jsonRequest) {
                // if (person != null) {
                //     document.getElementById("demo").innerHTML =
                //     "Hello " + person + "! How are you today?";
                //   }
                prompt("You are successfuly log in");
            }
        }
        else {
            prompt("Please enter valid input!");
        }
    }
}
