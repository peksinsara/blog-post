//LOGIN

//Get the modal
var login_modal = document.getElementById("login-modal");

//Get the button that opens the modal
var login_btn = document.getElementById("login-btn");

var span_login = document.getElementsByClassName("close-login-modal")[0];

login_btn.onclick = function () {
        login_modal.style.display = "block";
}

span_login.onclick = function () {
        login_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == login_modal) {
      login_modal.style.display = "none";
    }
}



//REGISTRATION

var registration_modal = document.getElementById("registration-modal");
var registration_btn = document.getElementById("registration-btn")
var span_registration = document.getElementsByClassName("close-registration-modal")[0];

registration_btn.onclick = function () {
    registration_modal.style.display = "block";
}

span_registration.onclick = function () {
    registration_modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == registration_modal) {
      registration_modal.style.display = "none";
    }
}

