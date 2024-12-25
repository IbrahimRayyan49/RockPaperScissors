let score_user = 0;
let score_computer = 0;
function user_input() {
    let y = prompt("Rock?Paper>Scissors?");
    y = y.trim().toLowerCase();
    if(!["rock","paper","scissors"].includes(y))
    {
        alert("Invalid Input, Try again!!");
        return user_input();
    }
    return y;
}
function computer_input() {
    let x = Math.random();
    let y;
    if (x > 0 && x < 0.333)
        y = "rock";
    else if (x > 0.333 && x < 0.666)
        y = "paper";
    else
        y = "scissors";
    return y;

}
function show_score() {
    alert(`User:${score_user}     Computer:${score_computer}`);
}

while (score_computer < 3 && score_user < 3) {
    let x = user_input();
    let y = computer_input();
    if(x==y)
    {
        alert("It's a tie!!!");
        continue;
    }
    
    if (
        (x === "scissors" && y === "paper") ||
        (x === "rock" && y === "scissors") ||
        (x === "paper" && y=="rock" ))
        {
        score_user++;
        }

     else {
        score_computer++;
    }
    show_score();
}
if (score_user == 3)
    alert("Congrats You win!!");
else
    alert("You lost!!");
