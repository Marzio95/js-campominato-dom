
const containerGame = document.querySelector('.container_game');

const btnPlay = document.getElementById('button_play');
let difficultInput = document.getElementById('difficult');

btnPlay.addEventListener('click', myGame);

function myGame() {

    containerGame.innerHTML = '';
    if (difficultInput.value == 'Hard') {
        difficultInput.value = '';
        for (let i = 1; i <= 49; i++) {
            let box = document.createElement('div');
            box.classList.add('quadrato');
            box.innerHTML = i;
            containerGame.append(box);
            box.addEventListener('click', colorChange);
        }

    } else if (difficultInput.value == 'Medium') {
        difficultInput.value = '';
        for (let i = 1; i <= 81; i++) {
            let box = document.createElement('div');
            box.classList.add('quadrato2');
            box.innerHTML = i;
            containerGame.append(box);
            box.addEventListener('click', colorChange);
        }
    } else if (difficultInput.value == 'Easy') {
        difficultInput.value = '';
        for (let i = 1; i <= 100; i++) {
            let box = document.createElement('div');
            box.classList.add('quadrato3');
            box.innerHTML = i;
            containerGame.append(box);
            box.addEventListener('click', colorChange);
        }
    } else {

    }


}

function colorChange(){
    this.classList.add('colore_new');
}