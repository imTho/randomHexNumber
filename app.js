const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

const btn = document.querySelector('.btn');
const colorDisplay = document.querySelector('.colorDisplay');
const main = document.querySelector('main');

btn.addEventListener('click' , function(){
    let hexColor = "#";

    for (let i = 0; i < 6; i++ ){
        hexColor += hex[randomHex()];
    }

    colorDisplay.textContent = hexColor;
    main.style.backgroundColor = hexColor;
});

function randomHex() {
    return Math.floor(Math.random() * hex.length);
}

