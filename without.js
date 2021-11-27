const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1,arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅ Assertion Passed:" + arr1 + "===" + arr2);
  } else {
    console.log("🛑🛑🛑 Assertion Failed:" + arr1 + "!==" + arr2);
  }

};


const without = function(source, itemsToRemove) {
  
  const filteredArray = [];
  let found = false;

  for (const item of source) {
    
    for (const removeItem of itemsToRemove) {
      if (item  === removeItem) {
        found = true;
      }
    }

    if (!found) {
      filteredArray.push(item);
    }
    found = false;

  }

  return filteredArray;

};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); // => ["hello", "world"]
assertArraysEqual(without([1, 2, 3], [1]), [2,3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

