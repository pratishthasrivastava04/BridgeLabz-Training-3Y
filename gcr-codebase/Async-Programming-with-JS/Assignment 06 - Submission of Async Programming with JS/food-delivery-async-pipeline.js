function createStep(successMessage, failureMessage) {
  return function () {
    return new Promise((resolve, reject) => {
      const delay = 1000 + Math.random() * 1000;
      setTimeout(() => {
        if (Math.random() < 0.05) {
          reject(new Error(failureMessage));
        } else {
          resolve(successMessage);
        }
      }, delay);
    });
  };
}

const takeOrder = createStep("Step 1: Order taken", "Order could not be taken");
const prepare = createStep("Step 2: Food prepared", "Food preparation failed");
const pack = createStep("Step 3: Package ready", "Packing failed");
const dispatch = createStep("Step 4: Out for delivery", "Dispatch failed");
const deliver = createStep("Delivery completed!", "Delivery failed");

async function runPipeline() {
  try {
    console.log("Start Pipeline");

    console.log(await takeOrder());
    console.log(await prepare());
    console.log(await pack());
    console.log(await dispatch());
    console.log(await deliver());
  } catch (error) {
    console.log("Pipeline failed!");
    console.log("Reason: " + error.message);
  }
}

runPipeline();