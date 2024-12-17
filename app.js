var userScore = 0;
var compScore = 0;
var choices = document.querySelectorAll(".choice");
var msg = document.querySelector("#msg");
var userScorePara = document.querySelector("#user-score");
var compScorePara = document.querySelector("#comp-score");
var genCompChoice = function () {
    var options = ["rock", "paper", "scissors"];
    var randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
var drawGame = function () {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};
var showWinner = function (userWin, userChoice, compChoice) {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win! Your ".concat(userChoice, " beats ").concat(compChoice);
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lost. ".concat(compChoice, " beats your ").concat(userChoice);
        msg.style.backgroundColor = "red";
    }
};
var playGame = function (userChoice) {
    //Generate computer choice
    var compChoice = genCompChoice();
    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    }
    else {
        var userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach(function (choice) {
    choice.addEventListener("click", function () {
        var userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
