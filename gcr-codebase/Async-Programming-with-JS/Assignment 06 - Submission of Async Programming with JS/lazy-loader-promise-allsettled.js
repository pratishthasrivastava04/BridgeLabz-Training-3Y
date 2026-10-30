const failingIndex = Math.floor(Math.random() * 3);

function loadProfile() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (failingIndex === 0) reject(new Error("Profile failed to load"));
      else resolve("Profile Loaded");
    }, 2000)
  );
}

function loadPosts() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (failingIndex === 1) reject(new Error("Posts failed to load"));
      else resolve("Posts Loaded");
    }, 1500)
  );
}

function loadMessages() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (failingIndex === 2) reject(new Error("Messages failed to load"));
      else resolve("Messages Loaded");
    }, 1000)
  );
}

const moduleNames = ["Profile", "Posts", "Messages"];
const startTime = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(moduleNames[index] + " succeeded: " + result.value);
    } else {
      console.log(moduleNames[index] + " failed: " + result.reason.message);
    }
  });

  const endTime = Date.now();
  console.log("Total time taken: " + (endTime - startTime) + " ms");
});