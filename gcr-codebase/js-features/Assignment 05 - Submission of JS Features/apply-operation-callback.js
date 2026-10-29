
function applyOperation(numbers, operation) {
  const result = [];
  for (const num of numbers) {
    result.push(operation(num)); 
  }
  return result;
}

function double(num) {
  return num * 2;
}


function square(num) {
  return num * num;
}

const numbers = [1, 2, 3, 4];

console.log("Original array:", numbers);
console.log("Doubled:", applyOperation(numbers, double)); 
console.log("Squared:", applyOperation(numbers, square)); 