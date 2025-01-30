let boxes = document.querySelectorAll('.box');
let headings = document.querySelectorAll('h1');
let tick = "✔";
let cross = "✘";

function gamestart(){
    for(let i=0; i<9; i++){
        let box = boxes[i];
        let heading = headings[i];
        // alert("game is working");
        box.addEventListener('click', function print(){
            if(i%2==0){
                heading.textContent=tick;

            }
            else{
                heading.textContent=cross;

            }
        })
    }
}
function gamereset(){
    for(let i=0; i<headings.length; i++){
        let heading = headings[i];
        heading.textContent = "";
    }
}
let start = document.querySelector('#start');
start.addEventListener('click', gamestart);
let reset = document.querySelector('#reset');
reset.addEventListener('click', gamereset);