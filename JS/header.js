//Import db.json from local storage
import users from '../db.json' assert {type: 'json'};

// Fetch Dashbord Card data start here--->

// Total Driver Count Using Import method--------->
// Fetch the driver details from import function It work on when json data on local mechine


// Store total numbers of object in driver_count variable.
let driver_count = Object.keys(users.driver).length;
//Select the div that class name que_driver
const que_Drivertext = document.querySelector(".que_Driver");
// Write a format in between store the driver_count value. Mean total driver
let que_Drivertag = '<div class="numbers" id="d_No"><span>' + driver_count + '</span></div>';
//This line load the HTML with value in between the que_driver div.    
que_Drivertext.innerHTML = que_Drivertag;

// Total Driver Count Using Run server method--------->

// Fetch the driver details from below url
// fetch("http://localhost:3000/driver")
// .then(function(resp) {
//     return resp.json();
// })
// .then(function(data) {// This line store the data Object in data variable.
//     // Store total numbers of object in driver_count variable.
//     let driver_count = Object.keys(data).length;
//     //Select the div that class name que_driver
//     const que_text = document.querySelector(".que_Driver");
//     // Write a format in between store the driver_count value. Mean total driver
//     let que_tag = '<div class="numbers" id="d_No"><span>'+ driver_count +'</span></div>';
//     //This line load the HTML with value in between the que_driver div.    
//     que_text.innerHTML = que_tag; 
// }) 


// Total Goods weight Count Start here ---------->


const totalWeight = users.trips;
var res = totalWeight.map(bill => bill.goods_weight).reduce((acc, amount) => acc + amount);


const que_Goodstext = document.querySelector(".que_goods");
let que_Goodstag = '<div class="numbers" id="d_No"><span>' + res + '</span></div>';   
que_Goodstext.innerHTML = que_Goodstag;


// Total Goods weight Count End here ---------->





// Total Trip Count Using Import method--------->

let trip_count = Object.keys(users.trips).length;
//Select the div that class name que_trip
const que_Triptext = document.querySelector(".que_trip");
// Write a format in between store the trip_count value. Mean total trip
let que_Triptag = '<div class="numbers">' + trip_count + '</div>';
//This line load the HTML with value in between the que_trip div.
que_Triptext.innerHTML = que_Triptag;


// Total Trip Count Using Run server method--------->

// Fetch the trip details from below url
// fetch("http://localhost:3000/trips")
// .then(function(resp) {
//     return resp.json();
// })
// .then(function(data) { // This line store the data Object in data variable.
//     // Store total numbers of object in trip_count variable.
//     let trip_count = Object.keys(data).length;
//     //Select the div that class name que_trip
//     const que_text = document.querySelector(".que_trip");
//     // Write a format in between store the trip_count value. Mean total trip
//     let que_tag = '<div class="numbers">'+ trip_count+'</div>';
//     //This line load the HTML with value in between the que_trip div.
//     que_text.innerHTML = que_tag;

// }) 


// Total Vehicles Count Using Import method--------->

let vehicles_count = Object.keys(users.vehicles).length;
//Select the div that class name que_vehicles
const que_vehiclestext = document.querySelector(".que_Vehicles");
// Write a format in between store the vehicles_count value. Mean total vehicles
let que_Vehiclestag = '<div class="numbers">' + vehicles_count + '</div>';
//This line load the HTML with value in between the que_vehicles div.   
que_vehiclestext.innerHTML = que_Vehiclestag;

// Total Vehicles Count Using Run server method--------->

// // Fetch the vehicles details from below url
// fetch("http://localhost:3000/vehicles")
// .then(function(resp) {
//     return resp.json();
// })
// .then(function(data) {// This line store the data Object in data variable.
//     // Store total numbers of object in vehicles_count variable.
//     let vehicles_count = Object.keys(data).length;
//     //Select the div that class name que_vehicles
//     const que_vehicles = document.querySelector(".que_Vehicles");
//     // Write a format in between store the vehicles_count value. Mean total vehicles
//     let que_tag = '<div class="numbers">'+ vehicles_count +'</div>';
//      //This line load the HTML with value in between the que_vehicles div.   
//     que_vehicles.innerHTML = que_tag;
// })


// Fetch Dashbord Card data End here--->


// data fetch for driver list table
fetch("http://localhost:3000/trips")
    .then((res) => res.json())
    .then((data) => {

        data.forEach((user) => {
            $("#body").append(`

            <tr>
                <td>
                    ${user.source}
                </td>
                <td>
                    ${user.destination}
                </td>
                <td>
                    ${user.goods_weight}
                </td>
                <td>
                    ${user.status}
                </td>
            </tr>
        `)

        });
    })
