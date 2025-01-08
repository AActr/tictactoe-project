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
            console.log(`Winner is ${board[a]}!`)
        }
    }
}

function change(buttonNum) {
    
    if (button[buttonNum].innerHTML != 'o' && button[buttonNum].innerHTML != 'x') {
        button[buttonNum].innerHTML = turn;
        board[buttonNum] = turn;

        checkWinner();
        turn = turn == 'o' ? 'x' : 'o';

        if (roundCounter >= maxRounds) {
            console.log("round ended!");
        }
        roundCounter++;
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

function rounds(turn) {
    chooseBox(turn);
}

function choose() {
    chooseX.addEventListener('click', () => {chooseBanner.style.display = "none"; turn = 'x'; rounds();});
    chooseO.addEventListener('click', () => {chooseBanner.style.display = "none"; turn = 'o'; rounds();});
}

choose()
