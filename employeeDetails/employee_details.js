const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
];

// Display all employees on page load
function displayAllEmployees() {
    const totalEmployees = employees.map(employee => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Calculate total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// Display HR employees
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    if (hrEmployees.length > 0) {
        document.getElementById('employeesDetails').innerHTML = hrEmployees.map(employee =>
            `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
        ).join('');
    } else {
        document.getElementById('employeesDetails').innerHTML = `<p>No HR employees found.</p>`;
    }
}

// Find employee by ID
function searchEmployee() {
    const employeeId = parseInt(prompt("Enter Employee ID:"));
    if (isNaN(employeeId)) {
        alert("Please enter a valid number.");
        return;
    }

    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =
            `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = `<p>No employee found with this ID.</p>`;
    }
}

// Load all employees when page loads
window.onload = displayAllEmployees;
