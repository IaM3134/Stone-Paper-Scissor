const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const scores = document.querySelector(".scores");
const resetBtn = document.querySelector("#resetBtn");

let userScore = 0;
let compScore = 0;

const randCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndex = (Math.floor(Math.random()*3));
    return options[randIndex];
} 

const showWinner = (userWin) => {
    if(userWin === true){
        msg.innerText = "You Won!"
        msg.style.backgroundColor = "green";
        userScore++;
        you.innerText = userScore;
    }
    else{
        msg.innerText = "You Lost";
        msg.style.backgroundColor="red";
        compScore++;
        comp.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    const compChoice = randCompChoice();
    if(userChoice === compChoice){
        msg.innerText = "This game is draw";
        msg.style.backgroundColor="rgb(73, 19, 19)"
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin);
    }   
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

resetBtn.addEventListener("click", () => {
    you.innerText = "0";
    comp.innerText = "0";
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "rgb(73, 19, 19)";
});