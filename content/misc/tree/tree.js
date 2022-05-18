function randInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + Number(min);
}

function generateExample() {
    var opList = document.getElementById("exampleOps");
    document.getElementById("FZ").style.visibility = "hidden";
    // Remove all children of the operation list
    opList.replaceChildren();

    // Get parameters
    const minElem = document.getElementById("minElem").value;
    const maxElem = document.getElementById("maxElem").value;
    const allowRemoval = document.getElementById("allowRemove").checked;
    var opCount = document.getElementById("opCount").value;

    if (maxElem - minElem < 5) {
        document.getElementById("FZ").style.visibility = "visible";
        return;
    } else if (opCount <= 0) {
        alert("Operation count must be a positive integer.");
        return;
    } else if (!allowRemoval && opCount > maxElem - minElem) {
        alert("Cannot perform this many insert operations!");
        return;
    }

    var exampleOps = new Array();
    var treeElems = new Set();

    while (opCount--) {

        if (allowRemoval &&
            ((treeElems.size == maxElem - minElem + 1) || (treeElems.size >= 5 && Math.random() > 0.5))) {
            // Delete item
            const idx = randInRange(0, treeElems.size - 1);

            // Temporarily transform the set into an array to delete a random element
            var tmpArr = [...treeElems];
            const deletedNumber = tmpArr[idx];
            treeElems.delete(deletedNumber);

            var operation = document.createElement("li");
            operation.appendChild(document.createTextNode("Remove " + deletedNumber));
            operation.style.color = "#cc241d";
            exampleOps.push(operation);
        } else {
            var newElem;
            do {
                newElem = randInRange(minElem, maxElem);
            } while (treeElems.has(newElem));

            treeElems.add(newElem);

            var operation = document.createElement("li");
            operation.appendChild(document.createTextNode("Insert " + newElem));
            exampleOps.push(operation);
        }
    }

    opList.replaceChildren(...exampleOps);

}