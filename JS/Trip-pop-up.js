
// This function call on when vehicle Driver clicked

document.getElementById('button_driver').addEventListener("click", function() {
	document.querySelector('.popup-section').style.display = "flex";
});

document.querySelector('.dclose').addEventListener("click", function() {
	document.querySelector('.popup-section').style.display = "none";
});

// This function call on when vehicle Button clicked

document.getElementById('button_truck').addEventListener("click", function() {
	document.querySelector('.truck_popup_section').style.display = "flex";
});

document.querySelector('.tclose').addEventListener("click", function() {
	document.querySelector('.truck_popup_section').style.display = "none";
});


// data fetch for truck list table
fetch("http://localhost:3000/driver")
.then((res) => res.json())
.then((data) => {
    console.log(data)

    // onclick="truck_details()"
    data.forEach((user) => {
        $("#pop_Up_tr").append(`

            <tr id=${user.id} onclick="truck_details(${user.id})">
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


// data fetch for truck list table
fetch("http://localhost:3000/vehicles")
.then((res) => res.json())
.then((data) => {
    console.log(data)

    // onclick="truck_details()"
    data.forEach((user) => {
        $("#pop_up_tt").append(`

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
