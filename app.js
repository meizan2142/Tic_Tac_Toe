let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true; 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8], 
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO =true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner()
    });
});


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
}

newGameBtn.addEventListener ('click', resetGame);
resetBtn.addEventListener ('click', resetGame);

// Important Practice Problem 
// (Solution Code is given in the Description Box)

// Implement The logic for "Draw" condition.
// You have to track when the game has no winner.
// In this case, print a different message in the message <p>


// Hint - Use a new variable count, which counts button clicks.
// When the total count reaches 9 but game has no winners,
// that means the Game was a Draw.