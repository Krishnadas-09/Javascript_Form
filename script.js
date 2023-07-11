let signinBtn = document.getElementById("signin");
let signupBtn = document.getElementById("signup");
let myForm = document.querySelector(".myform");
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let submitBtn = document.getElementById("submit");                      

signupBtn.onclick = function signInHandler() {
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
  myForm.classList.add("signin-form");
};

signinBtn.onclick = function signUpHandler() {
  signinBtn.classList.add("disable");
  signupBtn.classList.remove("disable");
  myForm.classList.remove("signin-form");
};

submitBtn.onclick = function validation(e) {
  e.preventDefault();

    
    if (name.value === null || name.value == "")
    return alert("Name should not be blank");
  else if (email.value === null || email.value == "")
    return alert("Email should not be blank");
  else if (phone.value === null || phone.value == "")
    return alert("Phone Number should not be blank");
  else if (password.value === null || password.value == "")
    return alert("Password should not be blank");
  else if (phone.value.length < 10 || phone.value.length > 10)
    return alert("Phone number is not valid");
  else 
  alert("Submitted successfully");
  
      myForm.reset()

    if(signinBtn.clicked){
        e.preventDefault();
        if (email.value === null || email.value == "")
    return alert("Email should not be blank");
  else if (password.value === null || password.value == "")
    return alert("Password should not be blank");
    else {
        return alert("Submitted Successfully");
        myForm.reset()
    }
    
    }
     
};
