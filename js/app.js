/*-------------------------------- Constants --------------------------------*/
/*const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
]
*/

/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner
let tie


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr")



const messageEl = document.querySelector("#message");
console.log(squareEls);
console.log(messageEl);

const resetBtnEl = document.querySelector("#reset")

/*-------------------------- Functions --------------------------------*/
const init = () => {
    board = ["", "", "",
        "", "", "",
        "", "", ""];

    turn = "X";

    winner = false;

    tie = false;

    render();
}




const updateBoard = () => {
    board.forEach((b, index) => {
        if (b === "X") {
            squareEls[index].textContent = "X"

        }
        else if (b === "O") {
            squareEls[index].textContent = "O"
        }
        else {
            squareEls[index].textContent = ""
        }

    })
}

const updateMessage = () => {
    console.log(winner,tie)
    if (winner === false && tie === false) {
        if (turn === "X") {
            messageEl.textContent = "It's X turn."
        }
        else { messageEl.textContent = "It's O turn" }
    }

    else if (winner === false && tie === true) {
        messageEl.textContent = "It's a tie!"
    }
    else {
        if (turn === "X") {
            messageEl.textContent = "X is winner!"
        }
        else { messageEl.textContent = "O is winner!" }
    }
}
const render = () => {
    updateBoard();
    updateMessage();
}


/*----------------------------- Event Listeners -----------------------------*/

function handleClick(event) {
    const squareIndex = event.target.id
    const squareIsFull = board[squareIndex] !== ""

    if (winner || squareIsFull) { return }
    console.log(squareIndex)
    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();


}

function placePiece(index) {
    board[index] = turn
}

function checkForWinner() {
    if (board[0] !== "" && board[0] === board[1] && board[0] === board[2]) {
        winner = true
    }
    else if (board[3] !== "" && board[3] === board[4] && board[3] === board[5]) {
        winner = true
    }
    else if (board[6] !== "" && board[6] === board[7] && board[6] === board[8]) {
        winner = true
    }
    else if (board[0] !== "" && board[0] === board[3] && board[0] === board[6]) {
        winner = true
    }
    else if (board[0] !== "" && board[0] === board[4] && board[0] === board[8]) {
        winner = true
    }
    else if (board[1] !== "" && board[1] === board[4] && board[1] === board[7]) {
        winner = true
    }
    else if (board[2] !== "" && board[2] === board[5] && board[2] === board[8]) {
        winner = true
    }
    else if (board[2] !== "" && board[2] === board[4] && board[2] === board[6]) {
        winner = true
    }
    console.log(winner)
}

/*winningCombos.forEach((winningCombo)=>{
    if(board[winningCombo[0]] !== " " && board[winningCombo[0]] === board[winningCombo[1]]&& board[winningCombo[0]]===board[winningCombo[2]] ){
        winner=true

    }
});*/


function checkForTie() {
    if (winner) return;
    if (board.includes("")) {
        tie = false
        console.log(tie)
    }
    else{ tie = true}

}

function switchPlayerTurn() {
    if (winner) return;
    if (turn === "X") {
        turn = "O"

    }
    else {
        turn = "X"
    }
    console.log(turn)
}
init();
resetBtnEl.addEventListener("click", init);
squareEls.forEach((sqr) => {
    sqr.addEventListener("click", handleClick)
});