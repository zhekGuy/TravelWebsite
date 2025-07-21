//Login form validation
document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let isValid = true;
    
    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Validate email
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById("emailError").textContent = "Invalid email format. e.g. 'mailname@mail.com'";
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
        document.getElementById("loginform").reset();

        // Redirect function
        function redirectToPage() {
            window.location.href = "../FinalAssignment/main.html"; 
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