
// This function call on when vehicle Driver clicked

document.getElementById('button_driver').addEventListener("click", function () {
    document.querySelector('.popup-section').style.display = "flex";
});

document.querySelector('.dclose').addEventListener("click", function () {
    document.querySelector('.popup-section').style.display = "none";
});

// This function call on when vehicle Button clicked

document.getElementById('button_truck').addEventListener("click", function () {
    document.querySelector('.truck_popup_section').style.display = "flex";
});

document.querySelector('.tclose').addEventListener("click", function () {
    document.querySelector('.truck_popup_section').style.display = "none";
});


// data fetch for truck list table
fetch("http://localhost:3000/driver?status=active")
    .then((res) => res.json())
    .then((data) => {

        // onclick truck_details
        data.forEach((user) => {
            $("#pop_Up_tr").append(`

            <tr id=${user.id} onclick="driver_details(${user.id})">
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

function driver_details(x) {
    fetch("http://localhost:3000/driver/" + x)
        .then((res) => res.json())
        .then((data) => {

            let json = data;
            console.log(data);

            let driver_name = json.name;

            document.getElementById("adriver").value = driver_name;
        });
}



// data fetch for truck list table
fetch("http://localhost:3000/vehicles?status=Available")
    .then((res) => res.json())
    .then((data) => {

        // onclick truck_details()
        data.forEach((user) => {
            $("#pop_up_tt").append(`

            <tr id=${user.id} onclick="vehicles_details(${user.id})">
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


function vehicles_details(tv) {
    fetch("http://localhost:3000/vehicles/" + tv)
        .then((res) => res.json())
        .then((data) => {
            let json = data;
            let truck_model = json.model;
            document.getElementById("avehicle").value = truck_model;
        });
}
