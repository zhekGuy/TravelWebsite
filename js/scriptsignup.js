//Sign up form validation
document.getElementById("signupform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let isValid = true;
    
    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Validate first name
    const firstName = document.getElementById("fname").value.trim();
    const fnameRegex = /^[A-Za-z]+$/;
    
     if (!fnameRegex.test(firstName)) {
        isValid = false;
        document.getElementById("firstNameError").textContent = "Only alphabets in first name.";
    }

    // Validate last name
    const lastName = document.getElementById("lname").value.trim();
    const lnameRegex = /^[A-Za-z]+$/;
    
     if (!lnameRegex.test(lastName)) {
        isValid = false;
        document.getElementById("lastNameError").textContent = "Only alphabets in first name.";
    }

    // Validate country code
    const countryCode = document.getElementById("countrycode").value.trim();
    if (countryCode == "") {
        isValid = false;
        document.getElementById("codeError").textContent = "Please select a country code.";
    }

    // Validate phone number
    const phone = document.getElementById("phone").value.trim();
    const phoneRegex = /^[\d\s\-()]{6,15}$/;
    
    if (!phoneRegex.test(phone)) {
        isValid = false;
        document.getElementById("phoneError").textContent = "Invalid phone number format. e.g. '*Country code* XX-XXX XXXX'";
    }

    // Validate email
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById("emailError").textContent = "Invalid email format. 'mailname@mail.com'";
    }

    // Validate password
    const password = document.getElementById("password").value.trim();
    if (password === "") {
        isValid = false;
        document.getElementById("passwordError").textContent = "Password is required.";
    }

    // If all validations pass, submit the form
    if (isValid) {
        popup.classList.add("visible");
        document.getElementById("blur").style.visibility = "visible";
    
        // Clear form inputs
        document.getElementById("signupform").reset();

        // Redirect function
        function redirectToPage() {
            window.location.href = "../FinalAssignment/login.html"; 
        }
    
        // Hide popup and redirect on click
        popup.addEventListener("click", function () {
            popup.classList.remove("visible"); 
            document.getElementById("blur").style.visibility = "hidden";
            redirectToPage();
        });
    
        // Hide popup and redirect on keydown
        document.addEventListener("keydown", function () {
            popup.classList.remove("visible");
            document.getElementById("blur").style.visibility = "hidden";
            redirectToPage();
        });
    }
});

