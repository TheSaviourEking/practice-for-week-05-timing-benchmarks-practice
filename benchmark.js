const [addNums, addNums100, addManyNums, addManyNums10, addManyNums100] = require('./phase-1');
const [addNums10, addManyNums10] = require('./phase-2');

let increment = 100000;

function benchMark() {
    for (let n = increment; n <= 10 * increment; n += increment) {
      let startTime = Date.now(); // Use performance.now() for accurate timing
      addNums(n);
      let endTime = Date.now();
      console.log(`addNums(${n}): ${endTime - startTime} ms`);
  
      // startTime = performance.now();
      // addManyNums(n);
      // endTime = performance.now();
      // console.log(`addManyNums(${n}): ${endTime - startTime} ms`);
    }
  }
  
  benchMark();
