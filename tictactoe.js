let boxes = document.querySelectorAll('.box');
let headings = document.querySelectorAll('h1');
let tick = "𝗢";
let cross = "✘";

// function delay(ms){
//     return new Promise(resolve=> setTimeout(resolve, ms));
// }
let scoreX = 0;
let scoreO = 0;

function updateScore(winner) {
  if (winner === cross) {
    scoreX++;
    document.getElementById('scoreX').textContent = scoreX;
  } else if (winner === tick) {
    scoreO++;
    document.getElementById('scoreO').textContent = scoreO;
  }
}


function gamereset(){
    for(let i=0; i<headings.length; i++){
        let heading = headings[i];
        heading.textContent = "";
    }
}

function whowin(){
    // alert("hi");
    let winner;

    if(headings[0].textContent === headings[1].textContent && headings[1].textContent === headings[2].textContent && headings[0].textContent !== ""){
        boxes[0].style.backgroundcolor='green';
        alert(headings[0].textContent + " wins");
        winner =headings[0].textContent;
    }
    else if(headings[3].textContent === headings[4].textContent && headings[3].textContent === headings[5].textContent && headings[3].textContent !== ""){
        boxes[3].style.backgroundcolor='green';
        alert(headings[3].textContent + " wins");
        winner =headings[3].textContent;

    }
    else if(headings[6].textContent === headings[7].textContent && headings[6].textContent === headings[8].textContent && headings[6].textContent !== ""){
        boxes[6].style.backgroundcolor='green';
        alert(headings[6].textContent + " wins");
        winner =headings[6].textContent;

        // alert("yay");
    }
    else if(headings[0].textContent === headings[3].textContent && headings[0].textContent === headings[6].textContent && headings[0].textContent !== ""){
        boxes[0].style.backgroundcolor='green';
        alert(headings[0].textContent + " wins");
        winner =headings[0].textContent;

    }
    else if(headings[1].textContent === headings[4].textContent && headings[1].textContent === headings[7].textContent && headings[1].textContent !== ""){
        boxes[1].style.backgroundcolor='green';
        alert(headings[1].textContent + " wins");
        winner =headings[1].textContent;

    }
    else if(headings[2].textContent === headings[5].textContent && headings[2].textContent === headings[8].textContent && headings[2].textContent !== ""){
        boxes[2].style.backgroundcolor='green';
        alert(headings[2].textContent + " wins");
        winner =headings[2].textContent;

    }
    else if(headings[0].textContent === headings[4].textContent && headings[0].textContent === headings[8].textContent && headings[0].textContent !== ""){
        boxes[0].style.backgroundcolor='green';
        alert(headings[0].textContent + " wins");
        winner =headings[0].textContent;

    }
    else if(headings[2].textContent === headings[4].textContent && headings[2].textContent === headings[6].textContent && headings[2].textContent !== ""){
        boxes[2].style.backgroundcolor='green';
        alert(headings[2].textContent + " wins");
        winner =headings[2].textContent;

    }
    else if(headings[1].textContent != "" && headings[2].textContent != "" && headings[3].textContent != "" && headings[4].textContent != "" && headings[5].textContent != "" && headings[6].textContent != "" ){
        
        alert("DRAW");
    }
    // gamereset();
    updateScore(winner);

}

// function gamestart(){
//     let j=0;
//     for(let i=0; i<9; i++){
//         let box = boxes[i];
//         let heading = headings[i];
//         // alert("game is working");
//         box.addEventListener('click', function print(){
            
//             box.onclick = () => {
//                 if (heading.textContent === "") {
//                     if(j%2==0 && (heading.textContent == "")){
//                         heading.textContent=tick;
//                         j++;
//                     }
//                     else if(j%2!=0 && (heading.textContent == "")){
//                         heading.textContent=cross;
//                         j++;
//                     }
                    
//                 }
//                 setTimeout(whowin, 300); 
//             }
            

            
//         });

//     }
    
// }

function gamestart(){
    let j=0;

    boxes.forEach((box, i) => {
        let heading = headings[i];

        
        box.onclick = () => {
            if (heading.textContent === "") {
                heading.textContent = (j % 2 === 0) ? tick : cross;
                j++;
                setTimeout(whowin, 300); 
            }
        };
    });
}





let start = document.querySelector('#start');
start.addEventListener('click', gamestart);
let reset = document.querySelector('#reset');
reset.addEventListener('click', gamereset);