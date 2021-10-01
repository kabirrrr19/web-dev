var countdownElement = document.getElementById('countdown');
var initialCountdownVal = countdownElement.innerHTML;
console.log(initialCountdownVal);

var interval = setInterval(function(){
  initialCountdownVal = initialCountdownVal > 0?
    initialCountdownVal -1 : 0 ;
  countdownElement.innerHTML = initialCountdownVal
  countdownElement.style.width = initialCountdownVal * 100 + "px";
  countdownElement.style.fontSize = initialCountdownVal * 30 + "px";
  console.log(initialCountdownVal);
  if(initialCountdownVal <= 0) {
    clearInterval(interval);
  }
}, 1000);



// ALL THESE STYLES THAT ARE UPDATED ARE ADDED AS INLINE STYLES SO YOU CAN NOT UPDATE PSEUDO CLASSES