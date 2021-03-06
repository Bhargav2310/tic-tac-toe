let buttons = [document.getElementById("1"), document.getElementById("2"), document.getElementById("3"), document.getElementById("4"), document.getElementById("5"), document.getElementById("6"), document.getElementById("7"), document.getElementById("8"), document.getElementById("9")];

let text = [document.getElementById("t1"), document.getElementById("t2"), document.getElementById("t3"), document.getElementById("t4"), document.getElementById("t5"), document.getElementById("t6"), document.getElementById("t7"), document.getElementById("t8"), document.getElementById("t9")];

let restartImage = document.getElementById("restart");

let status = document.getElementById("status");
let player = "O";
let run = true;

restartImage.addEventListener("click", function () {
    for (let i = 0; i < text.length; i++) text[i].innerHTML = "";
    status.innerHTML = "Start Playing!";
    run = true;
    player = "O";
});

function isEmpty(position) {
    return text[position].innerHTML === "";
}

function isWinner(move) {
    return text[0].innerHTML === move && text[1].innerHTML === move && text[2].innerHTML === move || text[3].innerHTML === move && text[4].innerHTML === move && text[5].innerHTML === move || text[6].innerHTML === move && text[7].innerHTML === move && text[8].innerHTML === move || text[0].innerHTML === move && text[4].innerHTML === move && text[8].innerHTML === move || text[2].innerHTML === move && text[4].innerHTML === move && text[6].innerHTML === move || text[0].innerHTML === move && text[3].innerHTML === move && text[6].innerHTML === move || text[1].innerHTML === move && text[4].innerHTML === move && text[7].innerHTML === move || text[2].innerHTML === move && text[5].innerHTML === move && text[8].innerHTML === move;
}

function gameLogic(index) {
    if (run) {
        if (isEmpty(index)) {
            if (player === "O") {
                text[index].innerHTML = "O";
                if (isWinner("O")) {
                    status.innerHTML = "Player 1 won!";
                    run = false;
                } else {
                    player = "X";
                    status.innerHTML = "Player 2: Your Move!"
                }
            } else if (player === "X") {
                text[index].innerHTML = "X";
                if (isWinner("X")) {
                    status.innerHTML = "Player 2 won!";
                    run = false;
                } else {
                    player = "O";
                    status.innerHTML = "Player 1: Your Move!"
                }
            }
        } else {
            status.innerHTML = "Sorry, that position is occupied!";
        }
    } else status.innerHTML = "Please clear the board!";
}

function main() {
    buttons[0].addEventListener("click", function () {
        gameLogic(0);
    });
    buttons[1].addEventListener("click", function () {
        gameLogic(1);
    });
    buttons[2].addEventListener("click", function () {
        gameLogic(2);
    });
    buttons[3].addEventListener("click", function () {
        gameLogic(3);
    });
    buttons[4].addEventListener("click", function () {
        gameLogic(4);
    });
    buttons[5].addEventListener("click", function () {
        gameLogic(5);
    });
    buttons[6].addEventListener("click", function () {
        gameLogic(6);
    });
    buttons[7].addEventListener("click", function () {
        gameLogic(7);
    });
    buttons[8].addEventListener("click", function () {
        gameLogic(8);
    });
}

main();