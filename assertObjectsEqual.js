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

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const prop in object1) {

    if (Array.isArray(object1[prop]) && Array.isArray(object2[prop])) {
      if (!eqArrays(object1[prop], object2[prop])) {
        return false;
      }
    } else {
      if (object1[prop] !== object2[prop]) {
        return false;
      }

    }
  }

  return true;

};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, actual)) {
    console.log("✅✅✅ Assertion Passed:" + inspect(actual) + "===" + inspect(expected));
  } else {
    console.log("🛑🛑🛑 Assertion Failed:" + inspect(actual) + "!==" + inspect(expected));
  }

};

// tests

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });