console.clear();
var selBtn = document.getElementById("btn-click");
var selDiv = document.getElementById("bkg");

function onBtnClick(){
    var randomNum = Math.floor(Math.random() * 255);
    selDiv.style.backgroundColor = "rgb("+ Math.floor(Math.random() * 255)+", "+ Math.floor(Math.random() * 255)+", "+ Math.floor(Math.random() * 255)+")";
    // alert('color changed using DOM manipulation');
}

// selBtn.onclick = onBtnClick;
 selBtn.addEventListener("click", onBtnClick);

 