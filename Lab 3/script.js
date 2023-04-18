function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = "";
  
    if (name == "") {
      error += "Name is required.\n";
    }
  
    if (email == "") {
      error += "Email is required.\n";
    } else {
      var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(email)) {
        error += "Email is not valid.\n";
      }
    }
  
    if (message == "") {
      error += "Message is required.\n";
    }
  
    if (error != "") {
      alert(error);
      return false;
    }
  }
  