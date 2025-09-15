const fibonacci = function(fibMember) {
  fibMember = +fibMember;
  if (fibMember < 0) return "OOPS";
  if (fibMember === 0) return 0;
  let prev = 0;
  let curr = 1;
  let next = 1;
  for (let i = 1; i < fibMember; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return next;
};

// Do not edit below this line
module.exports = fibonacci;
