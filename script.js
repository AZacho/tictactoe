let fields = []; //Variable zum Füllen mit den Strings

let currentShape = 'cross'; //Diese Variable gibt beim Aufrufen die Info 'cross' weiter

function fillShape(id) { // Hier wird die Form mit der Info gefüllt
    if (currentShape == 'cross') { // Wenn die Variable mit dem Inhalt 'cross' angewendet wurde...
        currentShape = 'circle'; // ...dann setze als nächstes den Inhalt 'circle' beim verwenden der Variable
    } else {
        currentShape = 'cross'; // Wenn dem nicht so ist, dann nutze wieder 'cross'!
    }
    fields[id] = currentShape; // In die Variable "Fields" wird der String aus der Variable "currentShape" eingesetzt
    console.log(fields); // zeigt den Vorgang in der Console an!  

    draw();
    checkForWin();
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
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){
        winner = fields[0];
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3];
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner = fields[2];
    }
    if(winner){
       console.log('Gewonnen!', winner); 
    }
    
}