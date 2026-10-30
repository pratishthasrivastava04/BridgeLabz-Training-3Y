function deployToServer(name, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(name + " failed to respond"));
      } else {
        resolve(name + " responded");
      }
    }, delay);
  });
}

const serverA = deployToServer("Server A", 2000);
const serverB = deployToServer("Server B", 3000);

Promise.all([serverA, serverB])
  .then((results) => {
    console.log("Deployment completed for all servers");
    console.log(results);
  })
  .catch((error) => {
    console.log("Promise.all error: " + error.message);
  });

Promise.race([serverA, serverB])
  .then((fastest) => {
    console.log("Fastest response: " + fastest);
  })
  .catch((error) => {
    console.log("Promise.race error: " + error.message);
  });