function stageWithCallback(stageName, callback) {
  setTimeout(() => {
    console.log("[Callbacks] " + stageName + " done");
    callback();
  }, 1000);
}

function runWithCallbacks(done) {
  stageWithCallback("design", () => {
    stageWithCallback("build", () => {
      stageWithCallback("test", () => {
        stageWithCallback("deploy", () => {
          stageWithCallback("celebrate", () => {
            console.log("[Callbacks] Pipeline finished");
            done();
          });
        });
      });
    });
  });
}

function stageWithPromise(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("[async/await] " + stageName + " done");
      resolve();
    }, 1000);
  });
}

async function runWithAsyncAwait() {
  await stageWithPromise("design");
  await stageWithPromise("build");
  await stageWithPromise("test");
  await stageWithPromise("deploy");
  await stageWithPromise("celebrate");
  console.log("[async/await] Pipeline finished");
}

runWithCallbacks(() => {
  runWithAsyncAwait();
});