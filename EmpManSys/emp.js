const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 ,specialization:'Python'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000,specialization:'Java' },
    
  ];

function displayEmployees(){
    const totalEmp=employees.map(employee=>`<p>${employee.id}- ${employee.name}- ${employee.age}- ${employee.department}- $${employee.salary}- ${employee.specialization}`).join('');
    document.getElementById('employeesDetails').innerHTML=totalEmp;
}

function calculateTotalSalaries(){
   const totalSalaries=employees.reduce((acc, employee)=>acc+employee.salary,0);
   document.getElementById('employeesDetails').innerHTML = `$${totalSalaries}`;}

function displayHREmployees(){
    const HrEmployee=employees.filter(employee=>employee.department==="HR");
    if(HrEmployee.length>0){
        document.getElementById('employeesDetails').innerHTML=HrEmployee.map(employee=>`<p>${employee.id}- ${employee.name}- ${employee.age}- ${employee.department}- $${employee.salary}- ${employee.specialization}</p>`).join('');
        
    }
    else{document.getElementById('employeesDetails').innerHTML="<p>no HR employees</p>";}
}

function searchEmployee(){
    const empId=parseInt(prompt("eneter emloyee Id"));
    if (isNaN(empId)){
        alert("enter a valid number");
    }

    const findEmp=employees.find(employee=> empId === employee.id);
    if(findEmp){
        document.getElementById('employeesDetails').innerHTML=`<p>${findEmp.id}- ${findEmp.name}- ${findEmp.age}- ${findEmp.department}- $${findEmp.salary}- ${findEmp.specialization}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML="<p>There is no employee with such ID</p>";
    }

}

function findBySpecializationJS(){
    const empSpecial=prompt("enter Specialization").toLowerCase();

    const findEmp=employees.find(employee=> empSpecial === employee.specialization.toLowerCase());
    if(findEmp){
        document.getElementById('employeesDetails').innerHTML=`<p>${findEmp.id}- ${findEmp.name}- ${findEmp.age}- ${findEmp.department}- $${findEmp.salary}- ${findEmp.specialization}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML="<p>There is no employee with such ID</p>";
    }
}