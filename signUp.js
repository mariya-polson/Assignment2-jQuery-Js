const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#login-pswd-input');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
// ----------------Validation-----------------------
      // Document is ready
$(document).ready(function () {
  // Validate Username
  $("#usercheck").hide();
  let usernameError = true;
  $("#usernames").keyup(function () {
    validateUsername();
  });
 
  function validateUsername() {
    let usernameValue = $("#usernames").val();
    if (usernameValue.length == "") {
      $("#usercheck").show();
      $("#usercheck").html("**Username required");
      usernameError = false;
      return false;
    } else if (usernameValue.length < 5 || usernameValue.length > 12) {
      $("#usercheck").show();
      $("#usercheck").html("**length of username must be between 3 and 10");
      usernameError = false;
      return false;
    } else {
      $("#usercheck").hide();
    }
  }
  //Validate email
  $("#emailcheck").hide();
   let emailError = true;
   $("#email-id").keyup(function () {
    validateEmail();
   });
   
   function validateEmail() {
    var regEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let emailValue=$("#email-id").val();
    var validEmail=regEmail.test(emailValue);
    if (!validEmail){
      $("#emailcheck").show();
      $("#emailcheck").html("**invalid email");
      emailError = false;
      return false;
    }
    else{
      $("#emailcheck").hide();
    }
   }
   // Validate Password
   $("#passcheck").hide();
   let passwordError = true;
   $("#login-pswd-input").keyup(function () {
     validatePassword();
   });
   function validatePassword() {
     let passwordValue = $("#login-pswd-input").val();
     if (passwordValue.length == "") {
     $("#passcheck").show();
     passwordError = false;
     return false;
     }
     if (passwordValue.length < 3 || passwordValue.length > 10) {
     $("#passcheck").show();
     $("#passcheck").html(
       "**length of your password must be between 3 and 10"
     );
     $("#passcheck").css("color", "red");
     passwordError = false;
     return false;
     } else {
     $("#passcheck").hide();
     }
   }
   // Submit button
   $("#signup").click(function (){
 
    validateUsername();
    validatePassword();
    validateEmail();
    if (
      usernameError == true &&
      passwordError == true &&
      confirmPasswordError == true &&
      emailError == true
    ) {
      return true;
    } else {
      return false;
    }
 });

})