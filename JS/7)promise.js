// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promiseOne = new Promise(function (resolve, reject) {
  // Do async task
  // DB calls

  setTimeout(() => {
    console.log("async Task Completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Asynv Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ userName: "Dave", email: "Dave@gmail.com" });
  }, 2000);
});

promiseThree.then(function (data) {
  console.log(data);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "User", pass: "123" });
    } else {
      reject("Error: Occurred");
    }
  }, 3000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((returnedUsername) => {
    console.log(returnedUsername, "Got it");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Task is either resolved or rejected");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "anotherUser", pass: "SecurePass" });
    } else {
      reject("Error: Occurred in promiseFive");
    }
  }, 3000);
});

async function consumePromiseFive() {
  {
    try {
      const response = await promiseFive;
      console.log(response, "promiseFiveResponse");
    } catch (error) {
      console.log(error);
    }
  }
}

consumePromiseFive();
