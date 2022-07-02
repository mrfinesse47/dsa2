function largestRange(array) {
  const hash = {};
  let count = 0;
  let maxCount = 0;
  let prevMax = 0;
  let min = Infinity;
  let max = -Infinity;
  let start;
  let end;

  for (let i = 0; i < array.length; i++) {
    if (hash[array[i]] === undefined) {
      hash[array[i]] = true;
    }
    max = Math.max(max, array[i]);
    min = Math.min(min, array[i]);
  }
  if (min === max) {
    return [min, max];
  }
  for (let i = min; i <= max; i++) {
    if (hash[i] && hash[i + 1]) {
      count++;
    } else {
      prevMax = maxCount;
      maxCount = Math.max(maxCount, count);
      count = 0;
      if (maxCount > prevMax) {
        start = i - maxCount;
        end = i;
      }
    }
  }
  return [start, end];
}
console.log(largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]));
// [1, 11, 3, 0, 15, 5, 2n, 4, 10, 7, 12, 6]
// [0, 7]

//{0:t,1:t,2:t,3:t,4:t,5:t,6:t,7:t,....10:t,11:t,12:t}
