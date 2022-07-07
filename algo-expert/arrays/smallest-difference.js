// [-1, 5, 10, 20, 28, 3]
// [26, 134, 135, 15, 17]

//sort both descending
// [-1, 3, 5, 10, 20, 28]

// [15, 17, 26, 134, 135] // 15--1=16
// move right it is positive
// 15 -3 = 12 m r
// 15-5 = 12 m r
//15 -10 = 5 mr
//15-20=-5 negative move left
//17-20=3 positive move right
//17-28=-11 move left
//26-28=-2 move left
//134-28=......

//O (N)LOG (M+N) and 0(1) space

function smallestDifference(arrayOne, arrayTwo) {
  if (arrayOne.length === 0 || arrayTwo.length === 0) {
    return [];
  }
  let signedRes = null;
  let smallestAbs = Infinity;
  let numbers = [];
  arrayOne = arrayOne.sort((m, n) => m - n); //sorts ascending
  arrayTwo = arrayTwo.sort((m, n) => m - n);

  let p1 = 0;
  let p2 = 0;
  while (p1 < arrayOne.length && p2 < arrayTwo.length) {
    signedRes = arrayTwo[p2] - arrayOne[p1];
    let oldSmallest = smallestAbs;
    smallestAbs = Math.min(Math.abs(signedRes), smallestAbs);
    if (smallestAbs !== oldSmallest) {
      numbers = [arrayOne[p1], arrayTwo[p2]];
    }
    if (signedRes > 0) {
      p1++;
    } else if (signedRes < 0) {
      p2++;
    } else {
      return [arrayOne[p1], arrayTwo[p2]];
    }
  }
  return numbers;
}
console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
