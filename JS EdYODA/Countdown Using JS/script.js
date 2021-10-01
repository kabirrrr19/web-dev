var countdownElement = document.getElementById('countdown');
var initialCountdownVal = countdownElement.innerHTML;
var backImgElement = document.getElementById('bg-img');
console.log(initialCountdownVal)

setInterval(function(){
  initialCountdownVal = initialCountdownVal > 0?
    initialCountdownVal -1 : 0 ;
  countdownElement.innerHTML = initialCountdownVal
  var backImgPath = initialCountdownVal%2==0? "https://img.freepik.com/free-photo/watercolor-light-blue-white-gradient-background-texture-aquarelle-liquid-abstract-blue-backdrop-hand-painted_145343-515.jpg?size=626&ext=jpg" 
:
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFUoOzaBd_QpPk6HpTIOZZYXdqVUQJur72g&usqp=CAU";
  backImgElement.src = backImgPath;
  console.log(initialCountdownVal)
}, 1000);

