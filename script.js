let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame = () => {
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#081b31";
} 

const showWinner = (userWin , userChoice , compchoice) => {
    if(userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You WIN! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compscore++;
        CompScorePara.innerText = compscore;
        msg.innerText = `You LOSE! Computer's ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    //Generate Computer Choice
    const compchoice = genCompChoice();
    if(userChoice === compchoice){
        //Draw Game
        drawGame();
    } else
    {
        let userWin = true ;
        if(userChoice === "rock")
            {
                //scissors, paper
                userWin=  compchoice === "paper"? false:true;
            } else if(userChoice === "paper"){
                //rock , scissors
                userWin = compchoice === "scissors"?false:true;
            } else {
                //rock , paper
                userWin = compchoice === "rock"?false:true;
            }
            showWinner(userWin,userChoice,compchoice);
    }
}


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

