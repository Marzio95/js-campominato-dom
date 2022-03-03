
const containerGame = document.querySelector('.container_game');

const btnPlay = document.getElementById('button_play');
let difficultInput = document.getElementById('difficult');
let partita = document.querySelector('.partita')

btnPlay.addEventListener('click', myGame);
let arrayBomb = [];
let arraySave = [];

function myGame() {
    partita.innerHTML = '';
    containerGame.innerHTML = '';


    if (difficultInput.value == 'Hard') {
        arraySave = [];
        console.log(arraySave)
        arrayBomb = [];
        if (arrayBomb.length == 49 - 16){
            partita.innerHTML = 'HAI VINTO!!!';
        } else {

        }
        console.log(arrayBomb);
        while (arrayBomb.length < 16) {
            let bomb = Math.floor(Math.random() * 49) + 1;
            while (arrayBomb.includes(bomb)) {
                bomb = Math.floor(Math.random() * 49) + 1;
            }
            arrayBomb.push(bomb);
        }
        
        difficultInput.value = '';
        for (let i = 1; i <= 49; i++) {
            let box = document.createElement('div');
            box.classList.add('quadrato');
            box.innerHTML = i;
            containerGame.append(box);
            box.addEventListener('click', controllo);

            function controllo() {
                if (arrayBomb.includes(i)) {
                    this.classList.add('colore_bad');  
                    partita.innerHTML = 'Mi dispiace: HAI PERSO!';
                    partita.style.display = 'block';
                    for (let i = 0; i <= arrayBomb.length; i++){
                        arrayBomb[i].classList.add('colore_bad');
                    }
                        
                    
                    
                } else {
                    this.classList.add('colore_good');
                    arraySave.push(this);                    
                }
            }
        }

    } else if (difficultInput.value == 'Medium') {
        arraySave = [];
        arrayBomb = [];
        console.log(arrayBomb);
        while (arrayBomb.length < 16) {
            let bomb = Math.floor(Math.random() * 81) + 1;
            while (arrayBomb.includes(bomb)) {
                bomb = Math.floor(Math.random() * 81) + 1;
            }
            arrayBomb.push(bomb);
        }

        difficultInput.value = '';
        for (let i = 1; i <= 81; i++) {
            let box = document.createElement('div');
            box.classList.add('quadrato2');
            box.innerHTML = i;
            containerGame.append(box);
            box.addEventListener('click', controllo);

            function controllo() {
                if (arrayBomb.includes(i)) {
                    this.classList.add('colore_bad');
                    partita.innerHTML = 'Mi dispiace: HAI PERSO!';
                    partita.style.visibility = 'visible';
                } else {
                    this.classList.add('colore_good');
                }
            }
        }
    } else if (difficultInput.value == 'Easy') {
        arraySave = [];
        arrayBomb = [];
        console.log(arrayBomb);
        while (arrayBomb.length < 16) {
            let bomb = Math.floor(Math.random() * 100) + 1;
            while (arrayBomb.includes(bomb)) {
                bomb = Math.floor(Math.random() * 100) + 1;
            }
            arrayBomb.push(bomb);
        }

        difficultInput.value = '';
        for (let i = 1; i <= 100; i++) {
            let box = document.createElement('div');
            box.classList.add('quadrato3');
            box.innerHTML = i;
            containerGame.append(box);
            box.addEventListener('click', controllo);

            function controllo() {
                if (arrayBomb.includes(i)) {
                    this.classList.add('colore_bad');
                    partita.innerHTML = 'Mi dispiace: HAI PERSO!';
                    partita.style.visibility = 'visible';
                    
                    
                } else {
                    this.classList.add('colore_good');
                }
            }
        } 
    } else {

    }


}
