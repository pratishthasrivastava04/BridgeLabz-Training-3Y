function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log("Name: " + this.name);
};

function Student(name, branch) {
  Person.call(this, name); 
  this.branch = branch;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; 

Student.prototype.printBranch = function () {
  console.log("Branch: " + this.branch);
};

Student.prototype.printDetails = function () {
  this.printName(); 
  this.printBranch();
};

const student1 = new Student("Pratishtha", "AI & Data Science");

student1.printDetails();

console.log("student1 instanceof Student:", student1 instanceof Student);
console.log("student1 instanceof Person:", student1 instanceof Person); 
console.log(
  "Student.prototype's parent is Person.prototype:",
  Object.getPrototypeOf(Student.prototype) === Person.prototype
);
console.log(
  "printName is own property of student1?",
  student1.hasOwnProperty("printName")
); 