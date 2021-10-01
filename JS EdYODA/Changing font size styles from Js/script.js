var font = document.getElementById('font');
var btnIncrease = document.getElementById('font-increase');
var btnDecrease = document.getElementById('font-decrease');
// var initialSize = font.style.fontSize; This wont give the font size because font size is not applied to it
var initialSize = window.getComputedStyle(font).fontSize;
initialSize = parseInt(initialSize.substr(0, (initialSize.length - 2)));

btnIncrease.onclick = function(){
    initialSize += 10;
    font.style.fontSize = initialSize + "px";
}
btnDecrease.onclick = function(){
    initialSize -= 10;
    font.style.fontSize = initialSize + "px";
}