// Purpose: fing the smalles int in an rray of ints

function findSmallestInt(args) {
  // sort the given array in ascending order
  const sorted = args.sort((a, b) => a - b);
  // return teh first element
  return sorted[0];
}

console.log(findSmallestInt([4, 5, 6, 7, 23, 234, 234, 0]));
