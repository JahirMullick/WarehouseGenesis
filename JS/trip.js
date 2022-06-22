

// data fetch for trip list table
fetch("http://localhost:3000/trips")
    .then((res) => res.json())
    .then((data) => {

        // onclick="truck_details()"
        data.forEach((user) => {
            $("#body").append(`

            <tr id=${user.id} onclick="trip_details(${user.id})">
                <td>
                    ${user.source}
                </td>
                <td>
                    ${user.destination}
                </td>
                <td>
                    ${user.status}
                </td>
            </tr>
        

        
        `)

        });
    })

function trip_details(x) {
    fetch("http://localhost:3000/trips/" + x)
        .then((res) => res.json())
        .then((data) => {

            let json = data;


            let trip_id = json.id;
            let trip_source = json.source;
            let trip_destination = json.destination;
            let trip_weight = json.goods_weight;
            let trip_time = json.time;
            let trip_driver = json.driver_name;
            let trip_truck = json.truck_model;
            let trip_status = json.status;


            document.getElementById("trip_id").value = trip_id;
            document.getElementById("truck_id").value = trip_source;
            document.getElementById("model").value = trip_destination;
            document.getElementById("company").value = trip_weight;
            document.getElementById("capacity").value = trip_time;
            document.getElementById("trip_status").value = trip_status;
            driver = document.getElementById('adriver').value = trip_driver;
            vehicle = document.getElementById('avehicle').value = trip_truck;

        });

}



function actionToggle() {
    var action = document.querySelector('.actiono');
    action.classList.toggle('active')

    // teXt area are readonly to editable
    document.getElementById("trip_id").readOnly = false;
    document.getElementById("truck_id").readOnly = false;
    document.getElementById("model").readOnly = false;
    document.getElementById("company").readOnly = false;
    document.getElementById("capacity").readOnly = false;
    document.getElementById("trip_status").readOnly = false;
    document.getElementById('adriver').readOnly = false;
    document.getElementById('avehicle').readOnly = false;

}

// trip add function
function add() {
    const request = new XMLHttpRequest();
    var source = document.getElementById('truck_id').value;
    var destination = document.getElementById('model').value;
    var distance = document.getElementById('company').value;
    var ex_Time = document.getElementById('capacity').value;
    var status = document.getElementById('trip_status').value;
    var driver = document.getElementById('adriver').value;
    var vehicle = document.getElementById('vehicle_name').value;
    var vehicleId = document.getElementById('vehicle_id').value;
    var driverId = document.getElementById('driver_id').value;

    let data = '{"source":"' + source + '","destination": "' + destination + '","goods_weight": ' + distance + ',"driver_name":"' + driver + '","driver_id":' + driverId + ',"truck_model":"' + vehicle + '","vehicle_id":' + vehicleId + ',"time": "' + ex_Time + '","status": "' + status + '"}';
    request.open("POST", "http://localhost:3000/trips/");
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(data);

    request.onload = function () {
        if (request.status == 201) {
            console.log("Successfully");
        }
        else {
            console.log("Wrong URL!");
        }
    }

    // teXt area are editable to readonly
    document.getElementById("trip_id").readOnly = true;
    document.getElementById("truck_id").readOnly = true;
    document.getElementById("model").readOnly = true;
    document.getElementById("company").readOnly = true;
    document.getElementById("capacity").readOnly = true;
    document.getElementById("trip_status").readOnly = true;
    document.getElementById('adriver').readOnly = true;
    document.getElementById('avehicle').readOnly = true;
}


document.getElementById('addButtonid').addEventListener("click", function () {
    const request = new XMLHttpRequest();
    var driverId = document.getElementById('driver_id').value;
    var status = document.getElementById('trip_status').value;
    let request_data = '{"status": "'+ status +'"}';
    request.open("PATCH", "http://localhost:3000/driver/" + driverId);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(request_data);
});
// function driverStatus() {
    
// }

document.getElementById('addButtonid').addEventListener("click", function ()  {
    const request = new XMLHttpRequest();
    var vehicleId = document.getElementById('vehicle_id').value;
    var status = document.getElementById('trip_status').value;
    let request_data = '{"status": "'+ status +'"}';
    request.open("PATCH", "http://localhost:3000/vehicles/" + vehicleId);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(request_data);
});


// truck update function

function update() {
    const request = new XMLHttpRequest();

    var source = document.getElementById('truck_id').value;
    var destination = document.getElementById('model').value;
    var distance = document.getElementById('company').value;
    var trip_id = document.getElementById('trip_id').value;
    var driver = document.getElementById('adriver').value;
    var vehicle = document.getElementById('avehicle').value;
    var ex_Time = document.getElementById('capacity').value;
    var status = document.getElementById('trip_status').value;
    var vehicleId = document.getElementById('vehicle_id').value;
    var driverId = document.getElementById('driver_id').value;

    let data = '{"source":"' + source + '","destination": "' + destination + '","goods_weight": ' + distance + ',"driver_name":"' + driver + '","driver_id":' + driverId + ',"truck_model":"' + vehicle + '", "vehicle_id":' + vehicleId + ', "time": "' + ex_Time + '","status": "' + status + '"}';

    request.open("Put", "http://localhost:3000/trips/" + trip_id);
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(data);

    request.onload = function () {
        if (request.status == 200) {
            console.log("Successfully");
        }
        else {
            console.log("Wrong URL!");
        }
    }

    // teXt area are editable to readonly
    document.getElementById("trip_id").readOnly = true;
    document.getElementById("truck_id").readOnly = true;
    document.getElementById("model").readOnly = true;
    document.getElementById("company").readOnly = true;
    document.getElementById("capacity").readOnly = true;
    document.getElementById("trip_status").readOnly = true;
    document.getElementById('adriver').readOnly = true;
    document.getElementById('avehicle').readOnly = true;
}


// truck delete function
function delet() {
    const request = new XMLHttpRequest();
    let deleteId = (document.getElementById('trip_id').value);
    request.open("DELETE", ("http://localhost:3000/trips/" + deleteId));
    request.send();

    request.onload = function () {
        if (request.status == 200) {
            console.log("Item Deleted");
        }
        else {
            console.log("Wrong URL!");
        }
    }

    // teXt area are editable to readonly
    document.getElementById("trip_id").readOnly = true;
    document.getElementById("truck_id").readOnly = true;
    document.getElementById("model").readOnly = true;
    document.getElementById("company").readOnly = true;
    document.getElementById("capacity").readOnly = true;
    document.getElementById("trip_status").readOnly = true;
    document.getElementById('adriver').readOnly = true;
    document.getElementById('avehicle').readOnly = true;
}

