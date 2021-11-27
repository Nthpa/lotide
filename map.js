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

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅ Assertion Passed:" + arr1 + "===" + arr2);
  } else {
    console.log("🛑🛑🛑 Assertion Failed:" + arr1 + "!==" + arr2);
  }

};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


//tests
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);


const multiplication = map([1, 2, 3, 4, 5], num => num * 2);
assertArraysEqual(multiplication, [2, 4, 6, 8, 10]);


const even = map([1, 2, 3, 4, 5], num => num % 2 === 0);
assertArraysEqual(even, [false, true, false, true, false]);
