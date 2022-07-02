// [8, 4, 2, 1, 3, 6, 7, 9, 5, 10, 11, 15, 12, 13]
//  4  3  2  1  2  3  4  5  1   2  3   4   3   4

// [1,2,3,4,10,9,8,7,6,5,200,199,188,177,166,144,100]
// [m, , , ,mx, , , , ,m,mx  ,   ,   ,   ,   ,   ,m]

//[1,2,3,4,10,9,8,7,6,5,200,199,188,177,166,144,100]
// 1,2,3,4,  ,5,4,3,2,1,   ,6  ,5   ,4   ,3  ,2  ,1]

//a strategy is to expand out from the mins and stop before the max
//then determine what to do with max points after

//[1,2,3,4,10,9,8,7,6,5,200,199,188,177,166,144,100]
//[1,2,3,4, 6,5,4,3,2,1, 7 ,6  ,5   ,4   ,3  ,2  ,1]

function minRewards(scores) {
  //step 1 find local min/max
  let sum = 0;
  const prizes = [];
  const max = new Set();
  const min = new Set();
  if (scores.length === 1) {
    return 1;
  }
  if (scores[1] > scores[0]) {
    min.add(0);
  } else {
    max.add(0);
  }
  if (scores[scores.length - 1] < scores[scores.length - 2]) {
    min.add(scores.length - 1);
  } else {
    max.add(scores.length - 1);
  }
  for (let i = 1; i < scores.length - 1; i++) {
    if (scores[i - 1] > scores[i] && scores[i + 1] > scores[i]) {
      min.add(i);
    }
    if (scores[i - 1] < scores[i] && scores[i + 1] < scores[i]) {
      max.add(i);
    }
  }

  min.forEach((val) => {
    console.log(prizes);
    let i = 0;
    let scoresCounter = 1;
    while (!max.has(val + i) && scores[val + i] !== undefined) {
      prizes[val + i] = scoresCounter + i;
      sum += prizes[val + i];
      i++;
    }
    i = 1;
    while (!max.has(val - i) && scores[val - i] !== undefined) {
      prizes[val - i] = scoresCounter + i;
      sum += prizes[val - i];
      i++;
    }
  });

  max.forEach((val) => {
    console.log(prizes);
    let maxLeft = prizes[val - 1];
    let maxRight = prizes[val + 1];

    if (!maxLeft) {
      prizes[val] = maxRight + 1;
      sum += prizes[val];
    } else if (!maxRight) {
      prizes[val] = maxLeft + 1;
      sum += prizes[val];
    } else {
      prizes[val] = Math.max(maxLeft, maxRight) + 1;
      sum += prizes[val];
    }
  });
  console.log(prizes);

  return sum;
}

console.log(
  minRewards([
    800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3, 6,
    7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53,
  ])
);
