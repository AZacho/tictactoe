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
}