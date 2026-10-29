
function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function () {
  console.log("Hi, I am " + this.name);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () {
  console.log("Department: " + this.department);
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function () {
  console.log(this.name + " teaches " + this.subject);
};

const prof = new Professor("Dr. Sharma", "Computer Science", "JavaScript");

prof.teach();          
prof.showDepartment(); 
prof.introduce();      

console.log("prof instanceof Professor:", prof instanceof Professor);
console.log("prof instanceof Faculty:", prof instanceof Faculty);
console.log("prof instanceof Person:", prof instanceof Person); 
console.log(
  "Chain check:",
  Object.getPrototypeOf(prof) === Professor.prototype &&
    Object.getPrototypeOf(Professor.prototype) === Faculty.prototype &&
    Object.getPrototypeOf(Faculty.prototype) === Person.prototype
);