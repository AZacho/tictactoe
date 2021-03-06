let fields = []; //Variable zum Füllen mit den Strings

let currentShape = 'cross'; //Diese Variable gibt beim Aufrufen die Info 'cross' weiter
let gameOver = false;



function fillShape(id) { // Hier wird die Form mit der Info gefüllt
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') { // Wenn die Variable mit dem Inhalt 'cross' angewendet wurde...
            currentShape = 'circle'; // ...dann setze als nächstes den Inhalt 'circle' beim verwenden der Variable
            document.getElementById('player-2').classList.remove('player-inactive');
            document.getElementById('player-1').classList.add('player-inactive');
        } else {
            currentShape = 'cross'; // Wenn dem nicht so ist, dann nutze wieder 'cross'!
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        }
        fields[id] = currentShape; // In die Variable "Fields" wird der String aus der Variable "currentShape" eingesetzt
        console.log(fields); // zeigt den Vorgang in der Console an!  

        draw();
        checkForWin();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-0').style.transform = 'scaleX(1)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(1)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(1)';
    }
    if (winner) {
        console.log('Gewonnen!', winner);
        gameOver = true;
        setTimeout(function(){
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
        }, 1500);
        
    }

}


function reStart() {
    gameOver = false;
    fields = [];
    document.getElementById('restart-btn').classList.add('d-none');
    document.getElementById('game-over').classList.add('d-none');

    for(let i=1; i < 8; i++){
        document.getElementById('line-' + i).classList.add('d-none');
    }

    for(let i=0; i < 9; i++){
        document.getElementById('cross-' + i).classList.add('d-none');
        document.getElementById('circle-' + i).classList.add('d-none');
    }    

}