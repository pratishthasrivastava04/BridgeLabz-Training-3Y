const user = {
  name: "Pratishtha",
  showName: () => {
    console.log("Arrow function output:", this.name);
  },
};

user.showName(); 
const userFixed = {
  name: "Pratishtha",
  showName: function () {
    console.log("Normal function output:", this.name);
  },
};

userFixed.showName();