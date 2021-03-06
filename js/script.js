// ELEMENTI HTML
const containerGame = document.querySelector('.container_game');
const btnPlay = document.getElementById('button_play');
let difficultInput = document.getElementById('difficult');
let partita = document.querySelector('.partita')



// FUNZIONE MYGAME CHE PARTE AL CLICK DEL TASTO
btnPlay.addEventListener('click', myGame);
let arrayBomb = [];
let arraySave = [];

// FUNZIONAMENTO FUNZIONE MY GAME  
function myGame() {
    partita.innerHTML = '';
    containerGame.innerHTML = '';

    // DIFFICOLTA' HARD
    if (difficultInput.value == 'Hard') {
        arraySave = [];
        console.log(arraySave)
        arrayBomb = [];
        console.log(arrayBomb);

        // CICLO WHILE CHE CREA LE BOMBE
        while (arrayBomb.length < 16) {
            let bomb = Math.floor(Math.random() * 49) + 1;
            while (arrayBomb.includes(bomb)) {
                bomb = Math.floor(Math.random() * 49) + 1;
            }
            arrayBomb.push(bomb);
        }

        // CICLO FOR CHE CREA I BOX
        difficultInput.value = '';
        for (let i = 1; i <= 49; i++) {
            let box = document.createElement('div');
            box.classList.add('quadrato');
            box.innerHTML = i;
            containerGame.append(box);
            box.addEventListener('click', controllo);

            // FUNZIONE CONTROLLO TASTO BOMBA O NO
            function controllo() {
                if (arrayBomb.includes(i)) {
                    this.classList.add('colore_bad');
                    partita.innerHTML = 'Mi dispiace: HAI PERSO! Il tuo punteggio è: ' + arraySave.length;
                    partita.style.display = 'block';

                    let boxes = document.querySelectorAll('.quadrato');
                    console.log(boxes);
                    for (let i = 0; i < boxes.length; i++) {
                        boxes[i].removeEventListener('click', controllo);
                        console.log(boxes[i]);
                        if (arrayBomb.includes(parseInt(boxes[i].innerHTML))) {
                            boxes[i].classList.add('colore_bad')
                        }
                    }

                } else {
                    this.classList.add('colore_good');
                    arraySave.push(this);
                    console.log(arraySave)
                }

                this.removeEventListener('click', controllo);

            }

        }

        // CONTROLLO FINALE SE LA PARTITA E' VINTA
        if (arraySave.length == 34) {
            partita.innerHTML = 'HAI VINTO!!!';
        } else {

        }

        // DIFFICOLTA' MEDIUM
    } else if (difficultInput.value == 'Medium') {
        arraySave = [];
        console.log(arraySave)
        arrayBomb = [];
        console.log(arrayBomb);

        // CICLO WHILE CHE CREA LE BOMBE
        while (arrayBomb.length < 16) {
            let bomb = Math.floor(Math.random() * 81) + 1;
            while (arrayBomb.includes(bomb)) {
                bomb = Math.floor(Math.random() * 81) + 1;
            }
            arrayBomb.push(bomb);
        }

        // CICLO FOR CHE CREA I BOX
        difficultInput.value = '';
        for (let i = 1; i <= 81; i++) {
            let box = document.createElement('div');
            box.classList.add('quadrato2');
            box.innerHTML = i;
            containerGame.append(box);
            box.addEventListener('click', controllo);

            // FUNZIONE CONTROLLO TASTO BOMBA O NO
            function controllo() {
                if (arrayBomb.includes(i)) {
                    this.classList.add('colore_bad');
                    partita.innerHTML = 'Mi dispiace: HAI PERSO! Il tuo punteggio è: ' + arraySave.length;
                    partita.style.display = 'block';

                    let boxes = document.querySelectorAll('.quadrato2');
                    console.log(boxes);
                    for (let i = 0; i < boxes.length; i++) {
                        boxes[i].removeEventListener('click', controllo);
                        console.log(boxes[i]);
                        if (arrayBomb.includes(parseInt(boxes[i].innerHTML))) {
                            boxes[i].classList.add('colore_bad')
                        }
                    }

                } else {
                    this.classList.add('colore_good');
                    arraySave.push(this);
                }
            }
        }
              // CONTROLLO FINALE SE LA PARTITA E' VINTA
              if (arraySave.length == 65) {
                partita.innerHTML = 'HAI VINTO!!!';
            } else {
    
            }

        

        // DIFFICOLTA' EASY
    } else if (difficultInput.value == 'Easy') {
        arraySave = [];
        console.log(arraySave)
        arrayBomb = [];
        console.log(arrayBomb);

        // CICLO WHILE CHE CREA LE BOMBE
        while (arrayBomb.length < 16) {
            let bomb = Math.floor(Math.random() * 100) + 1;
            while (arrayBomb.includes(bomb)) {
                bomb = Math.floor(Math.random() * 100) + 1;
            }
            arrayBomb.push(bomb);
        }

        // CICLO FOR CHE CREA I BOX
        difficultInput.value = '';
        for (let i = 1; i <= 100; i++) {
            let box = document.createElement('div');
            box.classList.add('quadrato3');
            box.innerHTML = i;
            containerGame.append(box);
            box.addEventListener('click', controllo);

            // FUNZIONE CONTROLLO TASTO BOMBA O NO
            function controllo() {
                if (arrayBomb.includes(i)) {
                    this.classList.add('colore_bad');
                    partita.innerHTML = 'Mi dispiace: HAI PERSO! Il tuo punteggio è: ' + arraySave.length;
                    partita.style.display = 'block';

                    let boxes = document.querySelectorAll('.quadrato3');
                    console.log(boxes);
                    for (let i = 0; i < boxes.length; i++) {
                        boxes[i].removeEventListener('click', controllo);
                        console.log(boxes[i]);
                        if (arrayBomb.includes(parseInt(boxes[i].innerHTML))) {
                            boxes[i].classList.add('colore_bad')
                        }
                    }


                } else {
                    this.classList.add('colore_good');
                    arraySave.push(this);
                }
            }
        }
             // CONTROLLO FINALE SE LA PARTITA E' VINTA
        if (arraySave.length == 84) {
            partita.innerHTML = 'HAI VINTO!!!';
        } else {

        }
    } 
    
    else {

    }


}
