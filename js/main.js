const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});
const togglePasswords = document.querySelector('#togglePasswords');
const confirmpassword = document.querySelector('#confirm_password');

togglePasswords.addEventListener('click', function (a) {
    // toggle the type attribute
    const type = confirmpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmpassword.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});


function validation(){
  var input_text = document.querySelector("#input_text");
  var input_password = document.querySelector("#password");
  var error = document.querySelector(".error_msg");

  if(input_text.value.length <= 3 || input_password.value.length <= 6 ){
    input_text.style.border = "1px solid #f74040";
    input_password.style.border = "1px solid #f74040";
    error.style.display = "inline-block";

    return false;
  }
  else{
    return true;
  }
  
}



$("")
