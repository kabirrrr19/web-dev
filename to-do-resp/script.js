'use strict';

const btnAdd = document.getElementById('btn-add');
const btnRem = document.getElementById('btn-rem');
const btnUpd = document.getElementById('btn-upd');
const list = document.getElementById('list');
const input = document.getElementById('input');
const btnDel = document.querySelectorAll('.font-awesome');
const dateLabel = document.querySelectorAll('.date');


const getDate = function () {
    const now = new Date();
    const locale = navigator.language;
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long", // 2-digit
      year: "numeric",
      weekday: "long",
    };
    const dateData = new Intl.DateTimeFormat(
      window.navigator.locale,
      options
    ).format(now);
    console.log(dateData);
    return dateData;
}



function createNewNode() {
    let dateData = getDate();
    const ele = document.createElement('li');
    const icon = document.createElement('i');
    const textContainer = document.createElement("span");
    const dateContainer = document.createElement("span");
    const delContainer = document.createElement('a'); 
    const dateAndDelContainer = document.createElement('span');

    const input = document.getElementById('input').value;
    const text = document.createTextNode(input);
    ele.className = "task";
    dateContainer.className = "date";
    ele.id = `task-${(list.childElementCount+1)}`;
    icon.className = "fas fa-trash font-awesome";
    icon.id = "trash";
    delContainer.appendChild(icon);
    dateContainer.innerHTML = dateData;
    textContainer.className = "word";
    
    textContainer.appendChild(text);
    dateAndDelContainer.appendChild(dateContainer);
    dateAndDelContainer.appendChild(delContainer)
    ele.appendChild(textContainer);
    ele.appendChild(dateAndDelContainer);
    // ele.appendChild(dateContainer);
    // ele.appendChild(delContainer);
    console.log(ele);
    return ele;
};
    

function addItem() {
    var newListElement = createNewNode();
    if(input.value === ''){
        alert('Please enter a valid To Do Item');
    }
    else if(list.childElementCount !== 0) {

        list.appendChild(newListElement);
        document.getElementById('input').value = "";
    }
    else {
        list.insertBefore(newListElement, document.getElementById('task-'+list.childElementCount));
        document.getElementById('input').value = "";
    }
};


input.addEventListener('keyup', function(e){
    if(e.key === "Enter"){
        addItem(); 
    }
});
btnAdd.addEventListener('click', addItem);


btnUpd.addEventListener('click', function(){
    var firstElement = list.firstElementChild;
    var newListElement = createNewNode();
    list.replaceChild(newListElement, firstElement);
    document.getElementById('input').value = "";
});


btnRem.addEventListener('click', function(){
    var firstElement = list.firstElementChild;
    list.removeChild(firstElement);
});


document.addEventListener('click', function (e) {
    e.preventDefault();
    // const selected = anchor.closest()
    // console.log("anchor : "+anchor.textContent + " " + anchor.id + " " + e.target.id);
    if (e.target.id === 'trash') {
        const anchor = e.target.closest(".task");
        list.removeChild(anchor);
    }
});

