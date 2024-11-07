let nameError = document.getElementById("name-error");
let phoneNoError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let textError = document.getElementById("text-error");
let submitError = document.getElementById("submit-error");

function ValidateName() {
    let name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'name required';
        return false; 
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'write fullname';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function ValidatePhone(){
    let phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneNoError.innerHTML = 'phoneNo required';
        return false; 
    }
    if(phone.length !== 10){
        phoneNoError.innerHTML = 'phoneNo should b 10 digits';
        return false; 
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneNoError.innerHTML = 'write fullname';
        return false;
    }
    phoneNoError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function ValidateEmail(){
    let email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email required';
        return false; 
    }
    if(!email.match(/^[A-Za-z\._\.-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function ValidateText() {
    let text = document.getElementById('contact-text').value;
    let required = 30;
    let left = required - text.length;

    if(left > 0){
        textError.innerHTML = left + 'more char required';
        return false;
    }
    textError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function  validateForm(){
    if(!ValidateName() || !ValidatePhone() || !ValidateEmail() || !ValidateText()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(() => submitError.style.display= 'none', 3000);
        return false;
    }
}
