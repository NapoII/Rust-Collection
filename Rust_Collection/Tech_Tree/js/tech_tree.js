// Funktion zum Erstellen eines Nodes
function createNode(id, x, y) {
    const node = document.createElement("div");
    node.className = "node";
    node.style.left = x + "px";
    node.style.top = y + "px";
    node.innerText = "Node " + id;
    document.getElementById("techtree").appendChild(node);
    return node; // Rückgabewert, um den erstellten Node zu speichern
}

// Funktion zum Erstellen einer Verbindung zwischen zwei Nodes
function createConnection(node1, node2) {
    const connection = document.createElement("div");
    connection.className = "connection";
    const rect1 = node1.getBoundingClientRect();
    const rect2 = node2.getBoundingClientRect();
    
    const x1 = rect1.left + rect1.width / 2;
    const y1 = rect1.top + rect1.height / 2;
    const x2 = rect2.left + rect2.width / 2;
    const y2 = rect2.top + rect2.height / 2;

    const angle = Math.atan2(y2 - y1, x2 - x1);
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    connection.style.left = x1 + "px";
    connection.style.top = y1 + "px";
    connection.style.width = length + "px";
    connection.style.transform = "rotate(" + angle + "rad)";
    document.getElementById("techtree").appendChild(connection);
}

// Beispiel-Nodes erstellen und in Variablen speichern
const node1 = createNode(1, 50, 50);
const node2 = createNode(2, 200, 50);
const node3 = createNode(3, 200, 200);

// Beispiel-Verbindungen erstellen
createConnection(node1, node2);
createConnection(node1, node3);
