const removeFromArray = function(arr, ...itemsToRemove) {
  return arr.filter((item) => !itemsToRemove.includes(item));
}
  // find item to remove from array
  // remove item from array

console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
