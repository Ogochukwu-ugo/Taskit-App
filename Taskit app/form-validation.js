//Validation of Forms



var username = document.getElementById('Username');


//email.addEventListener('textInput', 'email_Verify');
//password.addEventListener('textInput', 'password_Verify');

function validated() {

    var email = document.getElementById('Email');
    var password = document.getElementById('Password');


    if (! email.checkValidity()) {
        document.getElementById("result").innerHTML = input.validationMessage
    } 
    if (! password.checkValidity()) {
        document.getElementById("message").innerHTML = input.validationMessage
    } 

   
}