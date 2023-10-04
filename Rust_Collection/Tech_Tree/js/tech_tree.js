const treeData = {
    name: "Hammer",
    children: [
        {
            name: "Axt",
            children: [
                {
                    name: "Reifen"
                }
            ]
        },
        {
            name: "Schaufel",
            children: [
                {
                    name: "Sichel"
                }
            ]
        }
    ]
};

const margin = { top: 40, right: 120, bottom: 20, left: 120 };
const width = 960 - margin.right - margin.left;
const height = 500 - margin.top - margin.bottom;

const svg = d3.select("#tree")
    .append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

const treeLayout = d3.tree().size([width, height]);

const root = d3.hierarchy(treeData);
treeLayout(root);

// Erstellen Sie Linien für die Verbindungen zwischen den Knoten
const links = svg.selectAll(".link")
    .data(root.links())
    .enter().append("path")
    .attr("class", "link")
    .attr("d", d => {
        return `M${d.source.x},${d.source.y}L${d.target.x},${d.target.y}`;
    });

// Erstellen Sie Buttons als Knoten
const nodes = svg.selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", d => `translate(${d.x},${d.y})`);

// Erstellen Sie Buttons als gleichgroße Vierecke
nodes.append("rect")
    .attr("x", -20)
    .attr("y", -20)
    .attr("width", 40)
    .attr("height", 40)
    .attr("class", "node-rect");

// Fügen Sie Buttons hinzu
nodes.append("foreignObject")
    .attr("width", 40)
    .attr("height", 40)
    .html(d => `<button style="width:100%;height:100%;">${d.data.name}</button>`)
    .on("click", function (d) {
        // Ändern Sie die Farbe aller Verbindungen vom geklickten Button bis zum obersten Knoten
        links.attr("stroke", link => {
            const path = findPath(link.source, root);
            return path.includes(d) ? "red" : "#000";
        });
    });

function findPath(node, root) {
    const path = [];
    while (node !== root) {
        path.push(node);
        if (node.parent) {
            node = node.parent;
        } else {
            break;
        }
    }
    path.push(root);
    return path;
}
