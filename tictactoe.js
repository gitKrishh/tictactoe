let boxes = document.querySelectorAll('.box');
let headings = document.querySelectorAll('h1');
let tick = "✔";
let cross = "✘";

// function delay(ms){
//     return new Promise(resolve=> setTimeout(resolve, ms));
// }

function gamereset(){
    for(let i=0; i<headings.length; i++){
        let heading = headings[i];
        heading.textContent = "";
    }
}

function whowin(){
    // alert("hi");

    if(headings[0].textContent === headings[1].textContent && headings[1].textContent === headings[2].textContent && headings[0].textContent !== ""){
        boxes[0].style.backgroundcolor='green';
        alert(headings[0].textContent + " wins");
    }
    else if(headings[3].textContent === headings[4].textContent && headings[3].textContent === headings[5].textContent && headings[3].textContent !== ""){
        boxes[3].style.backgroundcolor='green';
        alert(headings[3].textContent + " wins");
    }
    else if(headings[6].textContent === headings[7].textContent && headings[6].textContent === headings[8].textContent && headings[6].textContent !== ""){
        boxes[6].style.backgroundcolor='green';
        alert(headings[6].textContent + " wins");
        // alert("yay");
    }
    else if(headings[0].textContent === headings[3].textContent && headings[0].textContent === headings[6].textContent && headings[0].textContent !== ""){
        boxes[0].style.backgroundcolor='green';
        alert(headings[0].textContent + " wins");
    }
    else if(headings[1].textContent === headings[4].textContent && headings[1].textContent === headings[7].textContent && headings[1].textContent !== ""){
        boxes[1].style.backgroundcolor='green';
        alert(headings[1].textContent + " wins");
    }
    else if(headings[2].textContent === headings[5].textContent && headings[2].textContent === headings[8].textContent && headings[2].textContent !== ""){
        boxes[2].style.backgroundcolor='green';
        alert(headings[2].textContent + " wins");
    }
    else if(headings[0].textContent === headings[4].textContent && headings[0].textContent === headings[8].textContent && headings[0].textContent !== ""){
        boxes[0].style.backgroundcolor='green';
        alert(headings[0].textContent + " wins");
    }
    else if(headings[2].textContent === headings[4].textContent && headings[2].textContent === headings[6].textContent && headings[2].textContent !== ""){
        boxes[2].style.backgroundcolor='green';
        alert(headings[2].textContent + " wins");
    }
    // gamereset();
}

function gamestart(){
    let j=0;
    for(let i=0; i<9; i++){
        let box = boxes[i];
        let heading = headings[i];
        // alert("game is working");
        box.addEventListener('click', function print(){
            if(j%2==0){
                heading.textContent=tick;
                j++;
            }
            else{
                heading.textContent=cross;
                j++;
            }

            setTimeout(whowin, 1000)

            
        });

    }
    
}





let start = document.querySelector('#start');
start.addEventListener('click', gamestart);
let reset = document.querySelector('#reset');
reset.addEventListener('click', gamereset);