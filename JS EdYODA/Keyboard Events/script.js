document.body.addEventListener('keydown', function(e){
    var keycode = e.key;
    console.log(keycode + " triggered using Keydown Event");
})

document.body.addEventListener('keyup', function(e){
    var keycode = e.key;
    if(keycode === "Backspace"){
    console.log(keycode + " triggered using Keyup Event");
    }
})