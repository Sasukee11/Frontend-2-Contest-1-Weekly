let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

function PrintDeveloper() {
  // Print all employees with the profession of developer
  let developers = arr.filter(
    (employee) => employee.profession === 'developer'
  );
  console.log('Developers:', developers);
}

function addData() {
  // Add a new employee to the array
  let newEmployee = { id: 4, name: 'susan', age: 20, profession: 'intern' };
  arr.push(newEmployee);
  console.log('Added Employee:', arr);
}

function removeAdmin() {
  // Remove employees with the profession of admin
  let nonAdminEmployees = arr.filter(
    (employee) => employee.profession !== 'admin'
  );
  arr = nonAdminEmployees;
  console.log('Employees after Removing Admins:', arr);
}

function concatenateArray() {
  // Concatenate another array of employees to the original array
  let additionalEmployees = [
    { id: 5, name: 'mike', age: 22, profession: 'developer' },
    { id: 6, name: 'lisa', age: 21, profession: 'admin' },
  ];
  arr = arr.concat(additionalEmployees);
  console.log('Concatenated Employees:', arr);
}

// Example function to console.log the array
function consoleArr() {
  console.log('Consoling Array Variable', arr);
}

// These functions are designed to modify the 'arr' variable based on your requirements.
// Just call the appropriate function on button clicks as mentioned.
