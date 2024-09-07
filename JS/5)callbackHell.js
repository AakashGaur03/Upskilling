function callDb(callback) {
  setTimeout(() => {
    let data = "AAA";
    console.log("Data from Backend");
    callback(data);
  }, 3000);
}
function gotData(data) {
  console.log("Data received:", data);
}

callDb(gotData);

// Example we need to make Pizza
// we need Cheese then we make dough out of it then Pizza

function getCheeseFromMarket(callback) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log(`Bough Cheese from market ${cheese}`);
    callback(cheese);
  }, 3000);
}
const makeDough = (cheese, callback) => {
  console.log(`We got cheese ${cheese}`);
  setTimeout(() => {
    const dough = "🍩";
    console.log(`Prepare Dough ${dough}`);
    callback(cheese, dough);
  }, 4000);
};
const makePizza = (cheese, dough, callbackPizza) => {
  console.log("first");
  console.log(`Got cheese ${cheese} & dough: ${dough}`);
  console.log(`Preparing Pizza`);
  setTimeout(() => {
    const pizza = "🍕🍕";
    console.log(`Pizza Prepared`);
    callbackPizza(pizza);
  }, 2000);
};
const giveMePizza = (recievedPizza) => {
  console.log(`Here is pizza ${recievedPizza}`);
};
// getCheeseFromMarket(makeDough(makePizza(giveMePizza)));


getCheeseFromMarket((cheese) => {
  makeDough(cheese, (cheese, dough) => {
    makePizza(cheese, dough, giveMePizza);
  });
});



// Nesting of multiple callback is called Callback Hell and they are hard to debug to 
// Thats why Promises and async await are preferred