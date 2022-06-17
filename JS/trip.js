

// data fetch for truck list table
fetch("http://localhost:3000/trips")
.then((res) => res.json())
.then((data) => {
    console.log(data)

    // onclick="truck_details()"
    data.forEach((user) => {
        $("#body").append(`

            <tr id=${user.id} onclick="truck_details(${user.id})">
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

function truck_details(x){
    fetch("http://localhost:3000/trips/"+ x)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)

        let json = data;

        // let truck_picture = json.picture;
        let trip_source = json.source;
        let trip_destination = json.destination;
        let trip_distance = json.distance;
        let trip_time = json.time;
        let trip_status = json.status;

        // document.getElementById("src").value = truck_picture;
        document.getElementById("truck_id").value = trip_source;
        document.getElementById("model").value = trip_destination;
        document.getElementById("company").value = trip_distance;
        document.getElementById("capacity").value = trip_time;
        document.getElementById("registration_number").value = trip_status;
        
    });
    
}






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
    var source = document.getElementById('truck_id').value;
    var destination = document.getElementById('model').value;
    var distance = document.getElementById('company').value;
    var ex_Time = document.getElementById('capacity').value;
    var status = document.getElementById('registration_number').value;

    let data = '{"source": "'+ source +'","destination": "'+ destination +'", "distance": "'+ distance +'", "time": "'+ ex_Time +'","status": "'+ status +'"}';
    request.open("POST", "http://localhost:3000/trips/");
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

    var source = document.getElementById('truck_id').value;
    var destination = document.getElementById('model').value;
    var distance = document.getElementById('company').value;
    var ex_Time = document.getElementById('capacity').value;
    var status = document.getElementById('registration_number').value;

    let data = '{"source":"'+ source +'","destination": "'+ destination +'","distance": "'+ distance +'", "time": "'+ ex_Time +'","status": "'+ status +'"}';

    request.open("Put", "http://localhost:3000/trips/" + truck_id);
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
    request.open("DELETE", ("http://localhost:3000/trips/" + deleteId));
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

