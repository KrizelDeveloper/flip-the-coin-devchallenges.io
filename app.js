let result = document.getElementById('heads-or-tails');
let coin = document.getElementById('coin');
let shadow = document.getElementById('shadow');
const btn = document.querySelectorAll('button');
let hiddenBtn = document.getElementById('hidden-button');

function coinFlip(){
if(Math.random() < 0.5){
    result.textContent = 'Heads';
    coin.src = './images/heads.svg';
    coin.hidden = false;
    shadow.hidden = false;
    hiddenBtn.hidden = false;
} else{
    result.textContent = 'Tails';
    coin.src = './images/tails.svg';
    coin.hidden = false;
    shadow.hidden = false;
    hiddenBtn.hidden = false;
}
}
btn.forEach(btn => {
    btn.addEventListener('click', coinFlip);
})

