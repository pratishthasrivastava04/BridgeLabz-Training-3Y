
function PersonProto(name) {
  this.name = name;
}
PersonProto.prototype.printName = function () {
  return "Name: " + this.name;
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.printBranch = function () {
  return "Branch: " + this.branch;
};
StudentProto.prototype.printDetails = function () {
  return this.printName() + ", " + this.printBranch();
};

class Person {
  constructor(name) {
    this.name = name;
  }

  printName() {
    return "Name: " + this.name;
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  printBranch() {
    return "Branch: " + this.branch;
  }

  printDetails() {
    return this.printName() + ", " + this.printBranch();
  }
}

const protoStudent = new StudentProto("Pratishtha", "AI & Data Science");
const classStudent = new Student("Pratishtha", "AI & Data Science");

console.log("Prototype version:", protoStudent.printDetails());
console.log("Class version    :", classStudent.printDetails());

console.log(
  "Both give the same output?",
  protoStudent.printDetails() === classStudent.printDetails()
);
console.log(
  "Class chain works:",
  classStudent instanceof Student && classStudent instanceof Person
); 
console.log(
  "Student.prototype's parent is Person.prototype:",
  Object.getPrototypeOf(Student.prototype) === Person.prototype
); 