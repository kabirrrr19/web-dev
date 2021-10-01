var username = document.getElementById("username");
var emailId = document.getElementById("email");
var loginForm = document.getElementById("login-form");

username.addEventListener('change', function(event){
    var currentValue = event.target.value;
    currentValue = currentValue.toUpperCase();
    console.log(currentValue);
    username.value = currentValue;
});

 emailId.addEventListener('focus', function(event){
    console.log('Element Focussed');
 });
 emailId.addEventListener('blur', function(event){
    console.log('Element Lost Focus');
 });

 loginForm.addEventListener('submit', function(e){
     console.log('Registration Completed');
     alert('Registration Completed')
     e.preventDefault();// this prevents from refreshing the page after submit button has been clicked
 });