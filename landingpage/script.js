
function validateForm(event) {
    event.preventDefault();
  
  
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

  
    // Validate name
    if (name === "") {
      document.getElementById("nameError").textContent = "Please enter your name";
      return;
    }
  
    // Validate email
    if (email === "") {
      document.getElementById("emailError").textContent = "Please enter your email";
      return;
    } else if (!isValidEmail(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address";
      return;
    }
  
    // Validate phone
    if (phone === "") {
      document.getElementById("phoneError").textContent = "Please enter your phone number";
      return;
    } else if (!isValidPhone(phone)) {
      document.getElementById("phoneError").textContent = "Please enter a valid phone number";
      return;
    }
  
  
  
    // If all validations pass, you can submit the form
    alert("Form submitted successfully!");
   
  }
  
  
  
  
  