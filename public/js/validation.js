/*
function for validating fields
in the add agent form

*/ 
function validate() {
/*_______________

varable to store regular expression
var letters = /^[A-Za-z]+$/; - only letters
/^\d{5}$/ 
/^[0-9a-zA-Z]+$/ - Alphanumeric
/^[0-9]+$/ - numbers
add_agent is the name of the form
___________________
*/

var firstname = document.add_agent.firstname;
var lastname = document.add_agent.lastname;
var username = document.add_agent.username;
var email = document.add_agent.email;
var nin = document.add_agent.nin;
// var address = document.add_agent.address;
var password = document.add_agent.password;

//_____________validaing username
// ___ when no name is provided 
if (username.value.length == '') {
    username.style.border = '1px solid red';
    alert('user name required');
    }
    // ___ when username has length less than 3
    if (username.value.length < 4 || username.value.length > 12) {
    
    username.style.border = '1px solid red';
    alert('user name should be between 5 to twelve, not more not less');
    }
    //_____ when user name is made numbers
    var letters = /^[0-9]+$/;
    if (username.value.match(letters)) {
    username.style.border = '1px solid red';
    alert('user name cant include integers');
    }
    //_______________ end of user name validation

//_____________validaing firstname
// ___ when no name is provided 
if (firstname.value.length == '') {
    firstname.style.border = '1px solid red';
    alert('first name required');
    }
    // ___ when firstname has length less than 3
    if (firstname.value.length < 3 || firstname.value.length > 22) {
    
    firstname.style.border = '1px solid red';
    alert('your first name should have atlease 3 character and not more than 22');
    }
    //_____ when fist name is made numbers
    var letters = /^[0-9]+$/;
    if (firstname.value.match(letters)) {
    firstname.style.border = '1px solid red';
    alert('your name cant include integers');
    }
    //_______________ end of first name validation

//_____________validaing lastname
// ___ when no name is provided 
if (lastname.value.length == '') {
    lastname.style.border = '1px solid red';
    alert('last name required');
    }
    // ___ when name has length less than 3
    if (lastname.value.length < 3 || lastname.value.length > 22) {
    
    lastname.style.border = '1px solid red';
    alert('your last name should have atlease 3 character and not more than 22');
    }
    //_____ when  name is made numbers
    var letters = /^[0-9]+$/;
    if (lastname.value.match(letters)) {
    lastname.style.border = '1px solid red';
    alert('your name cant include integers');
    }
    //_______________ end of last name validation


// _________ validating emails
var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!email.value.match(mail)){
email.style.border = '2px solid red';
alert('invalid email address, please check ur email')
}

// __________ validating nin
/*
google
making 1st 3 characters
making them upper case
ending with capital letters
*/
// if (nin.value.length == '') {
//     nin.style.border = '1px solid red';
//     alert(' NIN/National ID number is required');
//     }
    // ___ when username has length isnt 13
    if (nin.value.length != 13) {
    
    nin.style.border = '1px solid red';
    alert('Invalid NIN/National ID number, make sure it has 13 characters, ');
    }
    //_____ when user name is made numbers
    // var letters = /^[0-9]+$/;
    // if (username.value.match(letters)) {
    // username.style.border = '1px solid red';
    // alert('user name cant include integers');
    // }
// ____- end of nin validation

// _______ validating password
/*
google password validation,
 how to make sure user includes some 
 symbols and other characters
*/ 

}

/*
function to get price of product and divide it by 2
error message, Initial pay should be half the original price of the product
*/ 












