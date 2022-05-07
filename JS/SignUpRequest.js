const request = new XMLHttpRequest();

let jsonObj = {
    username : "google.com",
    password : "$@110"
}
let myJsonStr = JSON.stringify(jsonObj);

function Get_Request() {
    request.open("GET", "http://localhost:3000/admin");
    request.send();
    
    request.onload = function () {

        let jsonRequest
        
        if (request.status == 200) {
            // console.log("All Data fatched successfully.");
            // document.getElementById('comments1').value = request.response;
            jsonRequest = request.response;
            if (myJsonStr === jsonRequest) {
                
            }
        }
        else {
            console.log("Wrong URL!");
        }
    }
}


// function Post_Request() {
 
//     // let data = [];
    
//     request.open("POST", "http://localhost:3000/admin");
//     request.setRequestHeader('Content-Type', 'application/json')
//     request.send();
  
//     request.onload = function () {
//         if (request.status == 201) {
//             console.log("Post request send successfully");
//             // document.getElementById('comments1').value = request.response;
//         }
//         else {
//             console.log("Wrong URL!");
//         }
//     }
//   }