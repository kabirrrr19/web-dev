var btn = document.getElementById("btn-click");
var over = document.getElementById("mouse-over");
var enter = document.getElementById("mouse-enter");
var move = document.getElementById("mouse-move");
// var background = document.getElementsByTagName('body');

var countO = 0;
var countE = 0;
var countM = 0;

btn.addEventListener('click', function(){
    var randomNum = Math.floor(Math.random() * 255);
    // bkgColor =  window.getComputedStyle(background, "").backgroundColor;
    document.body.style.backgroundColor = "rgb("+ Math.floor(Math.random() * 255)+", "+ Math.floor(Math.random() * 255)+", "+ Math.floor(Math.random() * 255)+")";
});

over.addEventListener('mouseover', function(){
    var overCount = document.getElementById("count-mo");
    countO += 1; 
    overCount.innerHTML = countO;
})

enter.addEventListener('mouseenter', function(){
    var enterCount = document.getElementById("count-me");
    countE += 1; 
    enterCount.innerHTML = countE;
})

move.addEventListener('mousemove', function(){
    var moveCount = document.getElementById("count-mm");
    countM += 1; 
    moveCount.innerHTML = countM;
})

