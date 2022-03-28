const leftScore = document.getElementById("left-score")
const rightScore = document.getElementById("right-score")

const scoreValidate = (score) => {
    if(parseInt(score) < 1) return true;
    return false;
}

const onClickUpLeftScore = () => {
    leftScore.innerHTML = parseInt(leftScore.innerHTML) + 1;
}

const onClickDownLeftScore = () => {
    if(scoreValidate(leftScore.innerHTML)) return;    
    leftScore.innerHTML = parseInt(leftScore.innerHTML) - 1;
}

const onClickUpRightScore = () => {
    rightScore.innerHTML = parseInt(rightScore.innerHTML) + 1;
}

const onClickDownRightScore = () => {
    if(scoreValidate(rightScore.innerHTML)) return;    
    rightScore.innerHTML = parseInt(rightScore.innerHTML) - 1;
}


const onClickResetScore = () => {
    leftScore.innerHTML = 0;
    rightScore.innerHTML = 0;
}