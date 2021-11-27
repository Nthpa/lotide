const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:" + actual + "===" + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed:" + actual + "!==" + expected);
  }
};


const countLetters = function(string) {
  const result = {};

  for (const char of string) {
    if (result[char]) {
      result[char] = result[char] + 1;
    } else {
      result[char] = 1;
    }
  }

  return result;
};


// test
const output = countLetters("lighthouse in the house");
assertEqual(output['l'], 1);
assertEqual(output['i'], 2);
assertEqual(output['g'], 1);
assertEqual(output['h'], 4);
assertEqual(output['t'], 2);
assertEqual(output['o'], 2);
assertEqual(output['u'], 2);
assertEqual(output['s'], 2);
assertEqual(output['e'], 3);
assertEqual(output['n'], 1);
