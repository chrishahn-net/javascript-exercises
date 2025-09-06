const sumAll = function(...nums) {
  let total = 0;
  nums.sort((a, b) => a - b);
  if (nums.some((num) => num < 0 || !Number.isInteger(num))) return "ERROR";

  for (let i = nums[0]; i <= nums[1]; i++) {
    total += i;
  }

  return total;
};

console.log( sumAll(4, -2.5) )

// Do not edit below this line
module.exports = sumAll;
