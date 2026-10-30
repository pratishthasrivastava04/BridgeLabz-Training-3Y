function randomDelay() {
  return 1000 + Math.random() * 1000;
}

function shouldFail() {
  return Math.random() < 0.1;
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) {
        reject(new Error("Kettle stopped working while boiling water"));
      } else {
        console.log("Step 1: Water boiled");
        resolve("boiled water");
      }
    }, randomDelay());
  });
}

function brewCoffee(water) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) {
        reject(new Error("Coffee machine failed while brewing"));
      } else {
        console.log("Step 2: Coffee brewed using " + water);
        resolve("brewed coffee");
      }
    }, randomDelay());
  });
}

function pourIntoCup(coffee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) {
        reject(new Error("Cup slipped while pouring"));
      } else {
        console.log("Step 3: " + coffee + " poured into a cup");
        resolve("cup of coffee");
      }
    }, randomDelay());
  });
}

console.log("Starting the coffee process...");

boilWater()
  .then((water) => brewCoffee(water))
  .then((coffee) => pourIntoCup(coffee))
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch((error) => {
    console.log("Coffee process failed: " + error.message);
  });