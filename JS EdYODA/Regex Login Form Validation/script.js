console.clear();
var username = document.getElementById('username');
var wrapper = document.getElementsByTagName('div');
var warning = document.getElementById('username-err');

username.addEventListener('input', function(e){
  var pattern = /^[\w]{5,10}$/;
  var currentValue = e.target.value;
  var valid = pattern.test(currentValue);
  if(valid) {
    warning.style.display = "none";
  }
  else {
    warning.style.display = "block";
  }
});