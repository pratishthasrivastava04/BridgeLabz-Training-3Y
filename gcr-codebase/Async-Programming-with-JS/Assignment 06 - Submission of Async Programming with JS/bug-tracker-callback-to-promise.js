function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

const simulateApiFailure = Math.random() < 0.3;

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateApiFailure) {
        reject(new Error("API failure: could not fetch bugs"));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

fetchBugs((bugs) => {
  console.log("Callback version received:", bugs);
});

getBugs()
  .then((bugs) => {
    const bugTable = bugs.map((bug, index) => ({ id: index + 1, bug: bug }));
    console.table(bugTable);
  })
  .catch((error) => {
    console.log("Error: " + error.message);
  });