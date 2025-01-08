//buttons
const button = [
    document.getElementById("0"),
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4"),
    document.getElementById("5"),
    document.getElementById("6"),
    document.getElementById("7"),
    document.getElementById("8"),
]

const gameDiv = document.getElementById("game");
const endDisplay = document.getElementById("end-display");

const chooseBanner = document.getElementById("choose-banner");
const chooseX = document.getElementById("x")
const chooseO = document.getElementById("o")

const maxRounds = 9;
let roundCounter = 1;
let finished = false;
let turn = '';

const board = [null, null, null,null, null, null,null, null, null]

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function checkWinner() {
    for ([a, b, c] of winningCombinations) {
        if (board[a] && board[a] == board[b] && board[a] == board[c]) {
            console.log(`Winner is ${board[a]}!`);
            return true;
        }
    }
    return false;
}

function change(buttonNum) {
    
    if (button[buttonNum].innerHTML != 'o' && button[buttonNum].innerHTML != 'x') {
        button[buttonNum].innerHTML = turn;
        board[buttonNum] = turn;
        //checks if the game is won, if so it will cease to continue its normal functions and will return the value to display to the display
        console.log("passed")
        if (checkWinner() === false) {
            turn = turn == 'o' ? 'x' : 'o';

            if (roundCounter >= maxRounds) {
                gameDiv.style.display = "none";
                endDisplay.innerHTML += `
                <h1>It's a tie.</h1>
                <button id="restart">Play again?</button>
                `;
                document.getElementById("restart").addEventListener('click', () => {location.reload()});
            }
            roundCounter++;
        } else {
            //if game is won, function will return a win msg
            gameDiv.style.display = "none";
            endDisplay.innerHTML += `
                <h1>${turn} has won the game.</h1>
                <button id="restart">Play again?</button>
                `;
            document.getElementById("restart").addEventListener('click', () => {location.reload()});
        }
        
    }

}

function chooseBox() {
    button[0].addEventListener('click', () => {change(0)});
    button[1].addEventListener('click', () => {change(1)});
    button[2].addEventListener('click', () => {change(2)});
    button[3].addEventListener('click', () => {change(3)});
    button[4].addEventListener('click', () => {change(4)});
    button[5].addEventListener('click', () => {change(5)});
    button[6].addEventListener('click', () => {change(6)});
    button[7].addEventListener('click', () => {change(7)});
    button[8].addEventListener('click', () => {change(8)});
}

//start code
chooseX.addEventListener('click', () => {chooseBanner.style.display = "none"; turn = 'x'; chooseBox();});
chooseO.addEventListener('click', () => {chooseBanner.style.display = "none"; turn = 'o'; chooseBox();});
