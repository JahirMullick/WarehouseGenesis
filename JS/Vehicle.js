

// data fetch for truck list table
fetch("http://localhost:3000/vehicles")
.then((res) => res.json())
.then((data) => {
    console.log(data)

    // onclick="truck_details()"
    data.forEach((user) => {
        $("#body").append(`

            <tr id=${user.id} onclick="truck_details(${user.id})">
                <td>
                    ${user.model}
                </td>
                <td>
                    ${user.status}
                </td>
            </tr>
        

        
        `)
        
    });
})

function truck_details(x){
    fetch("http://localhost:3000/vehicles/"+ x)
    .then((res) => res.json())
    .then((data) => {

        let json = data;

        let truck_id = json.id;
        let truck_model = json.model;
        let truck_company = json.company;
        let truck_status = json.status;
        let truck_capacity = json.capacity;
        let truck_registration_number = json.registration_number;

        document.getElementById("truck_id").value = truck_id;
        document.getElementById("model").value = truck_model;
        document.getElementById("company").value = truck_company;
        document.getElementById("capacity").value = truck_capacity;
        document.getElementById("vehicle_status").value = truck_status;
        document.getElementById("registration_number").value = truck_registration_number;
        
    });
    
}


// // Refresh-section
// function vehiclerefresh() {
//     $('#vehicle_refresh-section').load(location.href + " #vehicle_refresh-section");
// };



function actionToggle(){
    var action = document.querySelector('.actiono');
    action.classList.toggle('active')

    // teXt area are readonly to editable
    document.getElementById("truck_id").readOnly = false;
    document.getElementById("model").readOnly = false;
    document.getElementById("company").readOnly = false;
    document.getElementById("capacity").readOnly = false;
    document.getElementById("registration_number").readOnly = false;
}


// truck add function
function add() {
    const request = new XMLHttpRequest();
    var model = document.getElementById('model').value;
    var company = document.getElementById('company').value;
    var capacity = document.getElementById('capacity').value;
    var registration_number = document.getElementById('registration_number').value;

    let data = '{"model": "'+ model +'","company": "'+ company +'", "capacity": "'+ capacity +'","registration_number": "'+ registration_number +'"}';
    request.open("POST", "http://localhost:3000/vehicles/");
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(data);

    request.onload = function () {
        if (request.status == 201) {
            console.log("Successfully");
            console.log(request.response);
        }
        else {
            console.log("Wrong URL!");
        }
    }

    // teXt area are editable to readonly
    // document.getElementById("driver_id").readOnly = true;
    // document.getElementById("name").readOnly = true;
    // document.getElementById("address").readOnly = true;
    // document.getElementById("phone_number").readOnly = true;
    // document.getElementById("pincode").readOnly = true;
    // document.getElementById("licence_number").readOnly = true;
    
}



// truck update function

function update(){
    const request = new XMLHttpRequest();

    var truck_model = (document.getElementById('model').value);
    var truck_company = (document.getElementById('company').value);
    var truck_capacity = (document.getElementById('capacity').value);
    var truck_registration_number = (document.getElementById('registration_number').value);
    var truck_id = (document.getElementById('truck_id').value);

    let data = '{"model": "'+ truck_model +'","company": "'+ truck_company +'", "capacity": "'+ truck_capacity +'","registration_number": "'+ truck_registration_number +'"}';

    request.open("Put", "http://localhost:3000/vehicles/" + truck_id);
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(data);

    request.onload = function () {
        if (request.status == 200) {
            console.log("Successfully");
            console.log(request.response);
        }
        else {
            console.log("Wrong URL!");
        }
    }

    // teXt area are editable to readonly
    // document.getElementById("driver_id").readOnly = true;
    // document.getElementById("name").readOnly = true;
    // document.getElementById("address").readOnly = true;
    // document.getElementById("phone_number").readOnly = true;
    // document.getElementById("pincode").readOnly = true;
    // document.getElementById("licence_number").readOnly = true;
}


// truck delete function
function delet(){
    const request = new XMLHttpRequest();
    let deleteId = (document.getElementById('truck_id').value);
    request.open("DELETE", ("http://localhost:3000/vehicles/" + deleteId));
    request.send();

    request.onload = function () {
        if (request.status == 200) {
            console.log("Item Deleted");
            console.log(request.response);
        }
        else {
            console.log("Wrong URL!");
        }
    }

    // teXt area are editable to readonly
    // document.getElementById("driver_id").readOnly = true;
    // document.getElementById("name").readOnly = true;
    // document.getElementById("address").readOnly = true;
    // document.getElementById("phone_number").readOnly = true;
    // document.getElementById("pincode").readOnly = true;
    // document.getElementById("licence_number").readOnly = true;
}

