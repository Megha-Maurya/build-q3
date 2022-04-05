var text = document.querySelector('#text');
var increase = document.querySelector('#increase');
var decrease = document.querySelector('#decrease');

var textSize = 5;

increase.addEventListener('click', () => {
        textSize = textSize + 2;
        text.style.fontSize = textSize + 'px';
});

decrease.addEventListener('click', () => {
        textSize = textSize - 2;
        text.style.fontSize = textSize + 'px';
});