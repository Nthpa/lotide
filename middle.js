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

const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  }

  const middleElements = [];
  const isEven = arr.length % 2 === 0;
  let mid = arr.length / 2;
  
  if (isEven) {
    middleElements.push(arr[mid - 1],arr[mid]);
  } else {
    mid = Math.floor(mid);
    middleElements.push(arr[mid]);
  }

  return middleElements;
};

// tests
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2 ]),[]);

// odd
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// even
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);