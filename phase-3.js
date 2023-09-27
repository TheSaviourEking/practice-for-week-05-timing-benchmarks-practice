const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  let startTime = Date.now();
  // Runs `addNums` in 10 increasing increments
  function addNums10(increment) {
    // Fill this in
    let result = [];
    for (let i = increment; i <= (increment * 10); i += increment) {
      result.push(addNums(i));
    }
    return result;
  }

  addNums10(n);

  let endTime = Date.now();

  console.log(endTime - startTime + ' ms');
}

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code

  // Your code here
  let startTime = Date.now();

  // Runs `addManyNums` in 10 increasing increments
  function addManyNums10(increment) {
    // Fill this in
    let result = [];
    for (let i = increment; i <= (increment * 10); i += increment) {
      result.push(addManyNums(i));
    }
    return result;
  }

  addManyNums10(increment);
  let endTime = Date.now();

  console.log(endTime - startTime + ' ms');
}

// COPIED FUNCTIONS
// ENDS HERE

n = 1000000
// console.log(`addNums(${n}): `);
// addNums10Timing(1000000);
for (let i = n; i <= (n * 10); i += n) {
  console.log(`addNums(${i}): `);
  addNums10Timing(i);
}
console.log("\n***********\n");

n = 1000
for (let i = n; i <= (n * 10); i += n) {
  console.log(`addManyNums(${i}): `);
  addManyNums10Timing(i);
}

/**
323
1305
2909
5138
8059
11218
15282
19845
26295
40091

101
90
92
93
93
95
91
93
90 
89
*/
