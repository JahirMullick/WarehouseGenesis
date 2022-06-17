




// data fetch for driver list table
fetch("http://localhost:3000/driver")
.then((res) => res.json())
.then((data) => {
    console.log(data)

    // onclick="driver_details()"
    data.forEach((user) => {
        $("#body").append(`

            <tr id=${user.id} onclick="driver_details(${user.id})">
                <td>
                    <div class="imgBx"><img src="${user.picture}"></div>
                </td>
                <td>
                    ${user.name}
                </td>
                <td>
                    ${user.status}
                </td>
            </tr>
        

        
        `)
        
    });
})

function driver_details(x){
    fetch("http://localhost:3000/driver/"+ x)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)

        let json = data;

        let driver_picture = json.picture;
        let driver_id = json.id;
        let driver_name = json.name;
        let driver_address = json.address;
        let driver_phone_number = json.phone;
        let driver_pincode = json.pin_code;
        let driver_licence_number = json.licence_no;
        let status = json.status;

        document.getElementById("driver_profile_picture").innerHTML = driver_picture;
        document.getElementById("driver_id").value = driver_id;
        document.getElementById("name").value = driver_name;
        document.getElementById("address").value = driver_address;
        document.getElementById("phone_number").value = driver_phone_number;
        document.getElementById("pincode").value = driver_pincode;
        document.getElementById("licence_number").value = driver_licence_number;
        document.getElementById("status").value = status;
        
    });
    
}






function actionToggle(){
    var action = document.querySelector('.actiono');
    action.classList.toggle('active')

    // teXt area are readonly to editable
    document.getElementById("driver_id").readOnly = false;
    document.getElementById("name").readOnly = false;
    document.getElementById("address").readOnly = false;
    document.getElementById("phone_number").readOnly = false;
    document.getElementById("pincode").readOnly = false;
    document.getElementById("licence_number").readOnly = false;
    document.getElementById("status").readOnly = false;
}


// driver add function
function add() {
    const request = new XMLHttpRequest();
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone_number').value;
    var pin_code = document.getElementById('pincode').value;
    var licence_no = document.getElementById('licence_number').value;
    var status = document.getElementById('status').value;

    let data = '{"name": "'+ name +'","address": "'+ address +'", "phone": "'+ phone +'","pin_code": "'+ pin_code +'","licence_no": "'+ licence_no +'","status": "'+ status +'"}';
    request.open("POST", "http://localhost:3000/driver");
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(data);

    request.onload = function () {
        if (request.status == 201) {
            console.log("Successfully");
            console.log(request.response);

            document.getElementById("popup-1").classList.toggle("active");
        }
        else {
            console.log("Wrong URL!");

            document.getElementById("popup-2").classList.toggle("active");
        }
    }

    // teXt area are editable to readonly
    document.getElementById("driver_id").readOnly = true;
    document.getElementById("name").readOnly = true;
    document.getElementById("address").readOnly = true;
    document.getElementById("phone_number").readOnly = true;
    document.getElementById("pincode").readOnly = true;
    document.getElementById("licence_number").readOnly = true;
    
}



// driver update function

function update(){
    const request = new XMLHttpRequest();

    var driver_name = (document.getElementById('name').value);
    var driver_address = (document.getElementById('address').value);
    var driver_phone = (document.getElementById('phone_number').value);
    var driver_pin_code = (document.getElementById('pincode').value);
    var driver_licence_no = (document.getElementById('licence_number').value);
    var driver_id = (document.getElementById('driver_id').value);
    var status = (document.getElementById('status').value);

    let data = '{"name": "'+ driver_name +'","address": "'+ driver_address +'", "phone": "'+ driver_phone +'","pin_code": "'+ driver_pin_code +'","licence_no": "'+ driver_licence_no +'","status": "'+ status +'"}';

    request.open("Put", "http://localhost:3000/driver/" + driver_id);
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(data);

    request.onload = function () {
        if (request.status == 200) {
            console.log("Successfully");
            console.log(request.response);

            document.getElementById("popup-3").classList.toggle("active");
        }
        else {
            console.log("Wrong URL!");

            document.getElementById("popup-4").classList.toggle("active");
        }
    }

    // teXt area are editable to readonly
    document.getElementById("driver_id").readOnly = true;
    document.getElementById("name").readOnly = true;
    document.getElementById("address").readOnly = true;
    document.getElementById("phone_number").readOnly = true;
    document.getElementById("pincode").readOnly = true;
    document.getElementById("licence_number").readOnly = true;
}


// driver delete function
function delet(){
    const request = new XMLHttpRequest();
    let deleteId = (document.getElementById('driver_id').value);
    request.open("DELETE", ("http://localhost:3000/driver/" + deleteId));
    request.send();

    request.onload = function () {
        if (request.status == 200) {
            console.log("Item Deleted");
            console.log(request.response);

            document.getElementById("popup-5").classList.toggle("active");
        }
        else {
            console.log("Wrong URL!");

            document.getElementById("popup-6").classList.toggle("active");
        }
    }

    // teXt area are editable to readonly
    document.getElementById("driver_id").readOnly = true;
    document.getElementById("name").readOnly = true;
    document.getElementById("address").readOnly = true;
    document.getElementById("phone_number").readOnly = true;
    document.getElementById("pincode").readOnly = true;
    document.getElementById("licence_number").readOnly = true;
}

