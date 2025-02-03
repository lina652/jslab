const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Recruitment' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Accounting' },
    { id: 4, name: 'Sarah Lee', age: 32, department: 'IT', salary: 55000, specialization: 'JavaScript' },
    { id: 5, name: 'Michael Brown', age: 40, department: 'Development', salary: 70000, specialization: 'Python' }
];

// Display all employees on page load
function displayAllEmployees() {
    const totalEmployees = employees.map(employee => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization} - $${employee.salary}</p>`
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
    document.getElementById('employeesDetails').innerHTML = hrEmployees.length ? 
        hrEmployees.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.specialization} - $${employee.salary}</p>`).join('') :
        '<p>No HR employees found.</p>';
}

// Find employee by ID
function searchEmployee() {
    const employeeId = parseInt(prompt("Enter Employee ID:"));
    if (isNaN(employeeId)) {
        alert("Please enter a valid number.");
        return;
    }

    const foundEmployee = employees.find(employee => employee.id === employeeId);
    document.getElementById('employeesDetails').innerHTML = foundEmployee ? 
        `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.specialization} - $${foundEmployee.salary}</p>` :
        `<p>No employee found with this ID.</p>`;
}

// Find employee by specialization
function searchBySpecialization() {
    const specialization = prompt("Enter Specialization (e.g., JavaScript, Python, Accounting):").trim();
    if (!specialization) {
        alert("Please enter a valid specialization.");
        return;
    }

    const filteredEmployees = employees.filter(employee => employee.specialization.toLowerCase() === specialization.toLowerCase());
    document.getElementById('employeesDetails').innerHTML = filteredEmployees.length ? 
        filteredEmployees.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.specialization} - $${employee.salary}</p>`).join('') :
        `<p>No employees found with specialization in ${specialization}.</p>`;
}

// Display JavaScript specialists
function displayJavaScriptSpecialists() {
    const jsEmployees = employees.filter(employee => employee.specialization.toLowerCase() === 'javascript');
    document.getElementById('employeesDetails').innerHTML = jsEmployees.length ? 
        jsEmployees.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.specialization} - $${employee.salary}</p>`).join('') :
        `<p>No JavaScript specialists found.</p>`;
}

// Load all employees when page loads
window.onload = displayAllEmployees;
