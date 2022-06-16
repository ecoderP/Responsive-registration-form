const form = document.getElementById("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // Get values and trim
        let firstNameValue = firstName.value.trim();
        let lastNameValue = lastName.value.trim();
        let emailValue = email.value.trim();
        let passwordValue = password.value.trim();
    
        if(firstNameValue === "") {
            // Show error message and add error class
            showError(firstName, "First Name cannot be empty");
        } else {
            // Show success message and add success class
            showSuccess(firstName);
        }

        if(lastNameValue === "") {
            // Show error message and add error class
            showError(lastName, "Last Name cannot be empty");
        } else {
            // Show success message and add success class
            showSuccess(lastName);
        }
    
        if(emailValue === "") {
            // Show error message and add error class
            showError(email, "Email cannot be empty");
        } else if(!email) {
            checkEmail();
        } else {
            // Show success message and add success class
            showSuccess(email);
        }
    
        if(passwordValue === "") {
            // Show error message and add error class
            showError(password, "Password cannot be empty");
        } else {
            // Show success message and add success class
            showSuccess(password);
        }
    
}

function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    //Add Error class
    formControl.className = "form-control error";
}

function showSuccess(input) {
    const formControl = input.parentElement;
    //Add success class
    formControl.className = "form-control success";
}

function checkEmail(email) { 
    //Get regex code from stack overflow to check if value is email
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
0