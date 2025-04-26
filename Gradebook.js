// TODO: Fetch data from the PostgreSQL database (to be implemented later)
function fetchGradeData() {
    console.log("Fetching grade data...");
    // Placeholder return value to simulate data fetching
    return [
        { name: "breanna", assignment1: "A", assignment2: "B+", assignment3: "A-" },
        { name: "breanna", assignment1: "B", assignment2: "A", assignment3: "B+" }
    ];
}

// TODO: Populate the table with grade data
function populateGradebook(data) {
    console.log("Populating gradebook with data:", data);
    const tbody = document.querySelector("#gradebook tbody");
    // Clear existing rows
    tbody.innerHTML = "";

    // Populate the table rows with data
    data.forEach((student) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.assignment1}</td>
            <td>${student.assignment2}</td>
            <td>${student.assignment3}</td>
        `;
        tbody.appendChild(row);
    });
}

// TODO REMOVE THIS
// Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
populateGradebook(gradeData);
// END REMOVE
