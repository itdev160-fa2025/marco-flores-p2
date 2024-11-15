function get(element){
    return document.getElementById(element);
}

var storedPasswords = ['password123', 'admin2024', 'securePass456'];
var storedUsernames = ['Walker', 'JJabraham', 'MessiL'];

function isValidPassword(userPassword) {
    return storedPasswords.includes(userPassword);
}

function isValidUserName(userName) {
    return storedUsernames.includes(userName);
}

//Button to submit user's name and password
var submitUserInfo = get("submit-user-info-button");
submitUserInfo.addEventListener("click", function(event){
    event.preventDefault();
    var userName = get("user-name").value;
    var userPassword = get("user-password").value;
    var userAlert = get("user-message");
    var passwordAlert = get("password-message");

    var nameDisplayed = get("user-name-displayed");
    var passwordDisplayed = get("user-password-displayed");

    nameDisplayed.textContent = '';
    passwordDisplayed.textContent = '';
    userAlert.textContent = '';
    passwordAlert.textContent = '';

    if (userName === '' || userPassword === '') {
        userAlert.textContent = "Please enter a valid user name with at least 6 characters.";
        passwordAlert.textContent = "Please enter a valid password with at least 8 characters.";
    } else if (userName.length < 6) {
        userAlert.textContent = "User name invalid";
    } else if (userPassword.length < 8) {
        passwordAlert.textContent = "Password invalid";
    } else if (!isValidPassword(userPassword) || !isValidUserName(userName)) {
        if (!isValidPassword(userPassword)) {
            passwordAlert.textContent = "Password is incorrect.";
        }
        if (!isValidUserName(userName)) {
            userAlert.textContent = "User name is incorrect.";
        }
    } else {
        nameDisplayed.innerText = "User name: " + userName;
        passwordDisplayed.innerText = "Password matches";
    }
})

//Functions for the form
function validateJobNumber(jobNumber){
    return /^[A-Za-z]\d{9}$/.test(jobNumber);
}

function  validateItemNumber(itemNumber){
    return /^\d{5}$/.test(itemNumber);
}



var submitButton = get("submit-job-button");

submitButton.addEventListener("click", function(event){

    event.preventDefault();

    //variables to store user inputs
    const jobNumber = get("job-number").value;
    const itemNumber = get("job-item").value;  
    var quantity =  parseInt(get("job-quantity").value, 10);
    var lines = parseInt(get("job-lines").value, 10);
    var completeShort = get("job-complete-short").value;
    var materialShortage = get("job-material-short").value;
    var pallets = parseInt(get("job-pallets").value, 10);

    

    //variables to display user input
    var jobNumberDisplay = get("job-number-info");
    var itemNumberDisplay = get("job-item-info");
    var quantityDisplay = get("job-quantity-info");
    var linesDisplay = get("job-lines-info");
    var completeshortDisplay = get("job-complete-short-info");
    var shortageDisplay = get("job-material-short-info");
    var palletsDisplay = get("job-pallets-info");

    //variables to display error messages
    var jobNumberEl = get("job-number-alert");
    var jobItemEl = get("job-item-alert");
    var jobQuantityEl = get("job-quantity-alert");
    var jobLinesEl = get("job-lines-alert");
    var jobPalletsEl = get("job-pallets-alert");
    var formAlertEl = get("form-alert");

    jobNumberEl.textContent = "";
    jobItemEl.textContent = "";
    jobQuantityEl.textContent = "";
    jobLinesEl.textContent = "";
    jobPalletsEl.textContent = "";
    formAlertEl.textContent = "";

    let isValid = true;

    

    if (!jobNumber.trim() || !itemNumber.trim() || isNaN(quantity) || isNaN(lines) || isNaN(pallets)) {
        formAlertEl.textContent = "All fields are required.";
        isValid = false;
    }
    

    if(!validateJobNumber(jobNumber)){
        jobNumberEl.textContent = "Job number must start with a letter and be 9 digits.";
        isValid = false;
    } 

   if(!validateItemNumber(itemNumber)){
       jobItemEl.textContent = "Item number must be exactly 5 digits.";
       isValid = false;
    } 

   if (isNaN(quantity) || quantity < 0) {
    jobQuantityEl.textContent = "Quantity must be a number and cannot be less than zero.";
    isValid = false;
   }

   if (isNaN(lines) || lines < 0) {
    jobLinesEl.textContent = "Lines must be a number and cannot be less than zero.";
    isValid = false;
    }

   if (isNaN(pallets) || pallets < 0) {
    jobPalletsEl.textContent = "Pallets must be a number and cannot be less than zero.";
    isValid = false;
   }

   if(isValid){
    jobNumberDisplay.textContent = "Job number: " + jobNumber; 
   itemNumberDisplay.textContent = "Item number: " + itemNumber; 
   quantityDisplay.textContent = "Quantity number: " + quantity; 
   linesDisplay.textContent = "Lines: " + lines; 
   completeshortDisplay.textContent = "Complete/Short:" + completeShort;
   shortageDisplay.textContent = "Short Material/Quantity: " + materialShortage; 
   palletsDisplay.textContent = "Pallets: " + pallets; 

   closeModal();
   }


   
})

//Clear button function
var clearButton = get("clear-modal-button");

clearButton.addEventListener("click", function () {
    // Clear user info form
    get("user-name").value = '';
    get("user-password").value = '';
    get("user-message").textContent = '';
    get("password-message").textContent = '';
    get("user-name-displayed").textContent = '';
    get("user-password-displayed").textContent = '';

   
    get("job-number").value = '';
    get("job-item").value = '';
    get("job-quantity").value = '';
    get("job-lines").value = '';
    get("job-complete-short").selectedIndex = 0;  
    get("job-material-short").value = '';
    get("job-pallets").value = '';
    get("form-alert").textContent = '';

    get("job-number-info").textContent = '';
    get("job-item-info").textContent = '';
    get("job-quantity-info").textContent = '';
    get("job-lines-info").textContent = '';
    get("job-complete-short-info").textContent = '';
    get("job-material-short-info").textContent = '';
    get("job-pallets-info").textContent = '';

    get("job-number-alert").textContent = '';
    get("job-item-alert").textContent = '';
    get("job-quantity-alert").textContent = '';
    get("job-lines-alert").textContent = '';
    get("job-pallets-alert").textContent = '';
    get("form-alert").textContent = '';
})



function openModal() {
    var modal = get("user-form-modal");
    var userName = get("user-name").value;
    var userPassword = get("user-password").value;
    var loginRequiredAlert = get("login-required-alert");

    if (userName === '' || userPassword === ''){
        loginRequiredAlert.textContent = "Please enter both user name and password, and click the 'Log in' before opening the form."
    } else{
        loginRequiredAlert.textContent = "";
        modal.style.display = "block";
    }
   
   
   
}


function closeModal() {
    var modal = get("user-form-modal");
 
    modal.style.display = "none";
 
}


window.addEventListener('load', function(){
    var modal = get("user-form-modal");
    var newButton = get("new-button");
    var closeButton = get("close-modal-button");
    

    modal.style.display = "none";
   
    

    newButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);
});

