const tail = function (array) {
  return array.slice(1);
};

const assertEqual = function (actual, expected) {

  if (actual.length !== expected.length) {
    console.log("🛑🛑🛑 Assertion Failed:" + actual + "!==" + expected);

  } else {

    let match = true;

    for (let i = 0; i < actual.length; i++) {

      // array doesn't match
      if (actual[i] !== expected[i]) {
        match = false;
        break;
      }
    }

    if (match) {
      console.log("✅✅✅ Assertion Passed:" + actual + "===" + expected);
    } else {
      console.log("🛑🛑🛑 Assertion Failed:" + actual + "!==" + expected);
    }


  }

};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);