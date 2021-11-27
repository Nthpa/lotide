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


const letterPositions = function(sentence) {
  const result = {};
  let i = 0;
  for (const char of sentence) {
    if (char !== " ") {
      if (result[char]) {
        result[char].push(i);
      } else {
        result[char] = [i];
      }
    }
    i++;

  }

  return result;
};

// test
const output = letterPositions("lighthouse in the house");
assertArraysEqual(output['l'], [0]);
assertArraysEqual(output['i'], [ 1, 11]);
assertArraysEqual(output['g'], [ 2 ]);
assertArraysEqual(output['h'], [ 3, 5, 15, 18 ]);
assertArraysEqual(output['t'], [ 4, 14 ]);
assertArraysEqual(output['o'], [ 6, 19 ]);
assertArraysEqual(output['u'], [ 7, 20 ]);
assertArraysEqual(output['s'], [ 8, 21 ]);
assertArraysEqual(output['e'], [ 9, 16, 22 ]);
assertArraysEqual(output['n'], [ 12 ]);