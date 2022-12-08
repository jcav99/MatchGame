function initialize(){
    currentScore = 0;
    scoreDisplay = document.getElementById("score");
    scoreDisplay.innerHTML = currentScore;
}


function showColor(id,assignedColor){
    tilePicked = document.getElementById(id);
    tilePicked.style.backgroundColor = assignedColor;
    currentScore++;
    displayScore();
    if (currentScore % 2 == 1){
        tileID = id;
        firstTile = assignedColor;
    }
    else{
        if (assignedColor != firstTile){
            tilePicked.style.backgroundColor = "grey";
            otherTile = document.getElementById(tileID);
            otherTile.style.backgroundColor = "grey";
        }
    }
}

function displayScore(){
    scoreDisplay.innerHTML = currentScore;
}