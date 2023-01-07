
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const color = document.querySelector('body');


let hideNumber = 1 + Math.round(19 * Math.random());

document.querySelector('.check').addEventListener("click", function check()
{
    const valueNumber = document.querySelector('.guess').value;
    if ( valueNumber < hideNumber)
    {
        message.textContent = "Số của bạn nhỏ hơn số bí mật";
    }
    else if ( valueNumber > hideNumber)
    {
        message.textContent = "Số của bạn lớn hơn số bí mật";
    }
    else if (valueNumber == hideNumber)
    {
        message.textContent = "Chúc mừng bạn đã đoán đúng";
        number.textContent = hideNumber;
        score.textContent = 10;
        highscore.textContent = 10;
        color.style.backgroundColor = "green";
    }
})

document.querySelector('.again').addEventListener("click", function()
{
    message.textContent = "Start guessing...";
    score.textContent = 0;
    number.textContent = "?";
    valueNumber.textContent = 0;
    color.style.backgroundColor = '#222';
    document.querySelector('.guess').value = 0;
})

