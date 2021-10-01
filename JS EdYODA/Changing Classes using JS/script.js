console.log('JS Loaded...')
var heading = document.getElementById('header');
var btn1 = document.getElementsByClassName('btn-click1');
var btn2 = document.getElementsByClassName('btn-click2');
var btn3 = document.getElementsByClassName('btn-click3');

// // btn1.onclick = heading.classList.add('big');
// btn2.addEventListener('click', heading.classList.add('small'));

var defaultStyle = function(){
    if(heading.classList.contains('small') || heading.classList.contains('big')){
        heading.classList.remove('small');
        heading.classList.remove('big');
    }
}
var onBtnBig = function(){
    if(heading.classList.contains('small')){
        heading.classList.remove('small');
    }
    heading.classList.add('big');
}
var onBtnSmall =function(){
    if(heading.classList.contains('big')){
    heading.classList.remove('big');
    }
    heading.classList.add('small');
}
console.log(heading.classList)
btn1.onclick = onBtnBig;
btn2.onclick = onBtnSmall;
btn3.onclick = defaultStyle;

