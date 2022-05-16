
const request = new XMLHttpRequest();

function Get_Request() {
  request.open("GET", "http://localhost:3000/admin");
  request.send();
  // console.log(request);

  request.onload = function () {
      if (request.status == 200) {
          console.log("Successful");
          console.log(request.response);
          // document.getElementById('usern').value = request.response;
          // document.getElementById('passw').value = request.response;
      }
      else {
          console.log("Wrong URL!");
      }
  }
}



// function Get_Request(){

//   userid = document.getElementById('usern').value;
//   password = document.getElementById('passw').value;
  
//   console.log('Userid = ',userid,'Password = ', password);
// }