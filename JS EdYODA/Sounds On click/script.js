var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");

one.addEventListener('click', function(e){
    var audio = new Audio("./drum_loop_electronic.mp3");
    audio.play();
    if(audio.play){
        one.style.backgroundColor = "#557a95";
        one.style.border = "2px solid black";
    }
    // if(e.pause){
    //     one.style.backgroundColor = red;
    //     one.style.border = "0";
    // }
});
two.addEventListener('click', function(){
    var audio = new Audio("./drums.mp3");
    audio.play();
    if(audio.play){
        two.style.backgroundColor = "#557a95";
        two.style.border = "2px solid black";
    }
});
three.addEventListener('click', function(){
    var audio = new Audio("./guitar.mp3");
    audio.play();
    if(audio.play){
        three.style.backgroundColor = "#557a95";
        three.style.border = "2px solid black";
    }
});
four.addEventListener('click', function(){
    var audio = new Audio("./krishna_flute.mp3");
    audio.play();
    if(audio.play){
        four.style.backgroundColor = "#557a95";
        four.style.border = "2px solid black";
    }
});
five.addEventListener('click', function(){
    var audio = new Audio("./krishna_flute_shankh.mp3");
    audio.play();
    if(audio.play){
        five.style.backgroundColor = "#557a95";
        five.style.border = "2px solid black";
    }
});
six.addEventListener('click', function(){
    var audio = new Audio("./radha_krishna_flute.mp3");
    audio.play();
    if(audio.play){
        six.style.backgroundColor = "#557a95";
        six.style.border = "2px solid black";
    }
});
seven.addEventListener('click', function(){
    var audio = new Audio("./shankh.mp3");
    audio.play();
    if(audio.play){
        seven.style.backgroundColor = "#557a95";
        seven.style.border = "2px solid black";
    }
});
eight.addEventListener('click', function(){
    var audio = new Audio("./shiv_shiv_shiv_shiv.mp3");
    audio.play();
    if(audio.play){
        eight.style.backgroundColor = "#557a95";
        eight.style.border = "2px solid black";
    }
});
nine.addEventListener('click', function(){
    var audio = new Audio("./shivji_damru.mp3");
    audio.play();
    if(audio.play){
        nine.style.backgroundColor = "#557a95";
        nine.style.border = "2px solid black";
    }
});
ten.addEventListener('click', function(){
    var audio = new Audio("./tum_prem_ho_krishna.mp3");
    audio.play();
    if(audio.play){
        ten.style.backgroundColor = "#557a95";
        ten.style.border = "2px solid black";
    }
});