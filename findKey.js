const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:" + actual + "===" + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed:" + actual + "!==" + expected);
  }
};


const findkey = function(object, callback) {
  for (const prop in object) {
    const result = callback(object[prop]);
    if (result) {
      return prop;
    }
  }
};



const result =
  findkey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  }, x => x.stars === 2);

assertEqual(result, "noma");