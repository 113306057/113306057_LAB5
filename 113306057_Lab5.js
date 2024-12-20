document.getElementById("submit-btn").addEventListener("click", function () {
    const mathGrade = parseFloat(document.getElementById("math-grade").value);
    const englishGrade = parseFloat(document.getElementById("english-grade").value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert("Please enter valid numbers for both grades.");
        return;
    }

    const tableBody = document.querySelector("#grades-table tbody");
    const rowCount = tableBody.rows.length + 1;
    const average = ((mathGrade + englishGrade) / 2).toFixed(2);

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathGrade}</td>
        <td>${englishGrade}</td>
        <td>${average}</td>
    `;

    tableBody.appendChild(newRow);

    updateColumnAverages();
});

function updateColumnAverages() {
    const rows = document.querySelectorAll("#grades-table tbody tr");
    let mathSum = 0,
        englishSum = 0,
        overallSum = 0;
    let count = rows.length;

    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        mathSum += parseFloat(cells[1].textContent);
        englishSum += parseFloat(cells[2].textContent);
        overallSum += parseFloat(cells[3].textContent);
    });

    document.getElementById("math-column-average").textContent = (mathSum / count).toFixed(2);
    document.getElementById("english-column-average").textContent = (englishSum / count).toFixed(2);
    document.getElementById("overall-average").textContent = (overallSum / count).toFixed(2);
}
