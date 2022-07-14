// TODO: Rewrite 'watchTutorialCallback' as a promise

function watchTutorialCallback(callback, errorCallback) {
  let userLeft = false;

  if (userLeft) {
    errorCallback("User left.");
  } else {
    callback("Thumbs up and Subscribe!");
  }
}

watchTutorialCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);
