// app.js

// Buttons and content containers
const btnAttack = document.getElementById("btn-attack");
const btnTime = document.getElementById("btn-time");
const recordsDiv = document.getElementById("records");
const visualizationDiv = document.getElementById("visualization");

// Sample data
const attackData = [
    { type: "cowrie.session.connect", times: ["2024-02-09", "2024-12-09"] },
    { type: "cowrie.session.params", times: ["2024-04-20"] },
    { type: "cowrie.direct-tcpip.data", times: ["2024-06-24", "2024-10-15"] },
];

const timeData = [
    { time: "2024-02-09", type: "cowrie.session.connect", detail: "Detail A" },
    { time: "2024-04-20", type: "cowrie.session.params", detail: "Detail B" },
    { time: "2024-06-24", type: "cowrie.direct-tcpip.data", detail: "Detail C" },
];

// Event listeners for buttons
btnAttack.addEventListener("click", () => {
    showAttackType();
    currentView = "timeline"; // Switch to timeline view
});
btnTime.addEventListener("click", () => {
    showTime();
    currentView = "heatmap"; // Switch to heatmap view
});

// Show attack type data
function showAttackType() {
    btnAttack.classList.add("active");
    btnTime.classList.remove("active");
    recordsDiv.innerHTML = generateAttackTable();
    currentView = "timeline"; // Update view to timeline
}

// Show time data
function showTime() {
    btnTime.classList.add("active");
    btnAttack.classList.remove("active");
    recordsDiv.innerHTML = generateTimeTable();
    currentView = "heatmap"; // Update view to heatmap
}

// Generate attack type table
function generateAttackTable() {
    let html = `<table>
        <tr>
            <th>Attack Type</th>
            <th>Times</th>
            <th>Detail</th>
        </tr>`;
    attackData.forEach((item) => {
        html += `<tr>
            <td>${item.type}</td>
            <td>${item.times.join(", ")}</td>
            <td><button class="detail-btn">Detail</button></td>
        </tr>`;
    });
    html += `</table>`;
    return html;
}

// Generate time table
function generateTimeTable() {
    let html = `<table>
        <tr>
            <th>Time</th>
            <th>Attack Type</th>
            <th>Detail</th>
        </tr>`;
    timeData.forEach((item) => {
        html += 