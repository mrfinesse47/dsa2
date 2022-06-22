// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

function find_averages_of_sub(arr, k) {
  let sum = 0;
  const avgArr = [];
  for (let i = 0; i <= k - 1; i++) {
    sum += arr[i];
  }

  avgArr.push(sum / k);

  for (let i = k, left = 0; i < arr.length; i++, left++) {
    sum -= arr[left];
    sum += arr[i];
    avgArr.push(sum / k);
  }
  return avgArr;
}

console.log(find_averages_of_sub([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
