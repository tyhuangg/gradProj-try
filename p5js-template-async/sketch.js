let currentView = "timeline"; // Default visualization

function setup() {
    const canvas = createCanvas(800, 400);
    canvas.parent("visualization"); // Embed canvas into the visualization div
    drawVisualization();
}

function drawVisualization() {
    clear();
    if (currentView === "timeline") {
        drawTimeline();
    } else if (currentView === "heatmap") {
        drawHeatmap();
    } else if (currentView === "map") {
        drawMap();
    }
}

function drawTimeline() {
    background(240);

    // Timeline example
    let events = ["2024-02-09", "2024-04-20", "2024-06-24", "2024-12-09"];
    let startX = 100;
    let endX = width - 100;
    let y = height / 2;

    // Draw timeline line
    stroke(0);
    line(startX, y, endX, y);

    // Draw events
    for (let i = 0; i < events.length; i++) {
        let x = map(i, 0, events.length - 1, startX, endX);
        fill(0);
        ellipse(x, y, 10, 10);
        textAlign(CENTER);
        text(events[i], x, y + 20);
    }
}

function drawHeatmap() {
    background(240);

    // Heatmap example
    noStroke();
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            fill(random(100, 255), random(100, 255), random(100, 255));
            rect(i * 40, j * 40, 40, 40);
        }
    }
}

function drawMap() {
    background(200, 240, 255);

    // Map example
    fill(0);
    ellipse(width / 2, height / 2, 50, 50); // Simulated "location marker"
    textAlign(CENTER);
    text("Sample Location", width / 2, height / 2 + 40);
}