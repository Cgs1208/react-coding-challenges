(async function () {
  const response = await fetch("./data.json");
  const data = await response.json();

  const employees = data;
  const selectedEmployeeId = employees[0].id;
  const selectedEmployee = employees[0];

  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employees__single--info");

  //Add employee logic

  //selecting employee logic

  // Render All Employees Logic start
  const renderEmployees = () => {
    employeeList.innerHTML = "";
    employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employees__names--item");
      if (parseInt(selectedEmployeeId, 10) === emp.id) {
        employee.classList.add("selected");
        selectedEmployee = emp;
      }
      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">❌</i>`;
      employeeList.append(employee);
    });
  };
  // Render All Employees Logic end

  renderEmployee();
})();
