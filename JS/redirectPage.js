
function aboutusPage() {
    $('#refresh-section').load('/Html/about us.html');
};
function dasboardPage() {
    $('#refresh-section').load(location.href + " #refresh-section");
};
function driverPage() {
    $('#refresh-section').load('/Html/driver.html');
};
function helpPage() {
    $('#refresh-section').load('/Html/help.html');
};

function loginPage() {
    window.location = "/Html/LoginForm.html";
};

function passwordPage() {
    $('#refresh-section').load('/Html/password.html');
};
function tripPage() {
    $('#refresh-section').load('/Html/trip.html');
};
function vehiclePage() {
    $('#refresh-section').load('/Html/vehicle.html');
};
