
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {

    result.push(callback(this[i], i, this));
  }
  return result; 
};

const numbers = [1, 2, 3];

console.log(numbers.myMap((num) => num * 2)); 
console.log(numbers.myMap((num, index) => num + index));
console.log(["a", "b"].myMap((ch) => ch.toUpperCase())); 

console.log(numbers.map((num) => num * 2));
console.log("Original array unchanged:", numbers); 