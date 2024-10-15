interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Hafsa',
  lastName: 'Daoudim',
  age: 34,
  location: 'Morocco',
};
const student2: Student = {
  firstName: 'Kamelia',
  lastName: 'Blyid',
  age: 32,
  location: 'Romania',
};

const studentsList = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
  const tr = table.insertRow();
  const firstNameCell = tr.insertCell();
  const locationCell = tr.insertCell();

  firstNameCell.innerText = student.firstName;
  locationCell.innerText = student.location;
});
