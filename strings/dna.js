const findRepeatedDnaSequences = (dnaStr) => {
  if (dnaStr.legth < 10) {
    return null;
  }
  //step 1 build initial 10 array
  let sequence = "";
  let dnaHash = {};
  let resultArr = [];
  for (let i = 0; i < 10; i++) {
    sequence += dnaStr[i];
  }

  dnaHash[sequence] = 1;

  for (let j = 10; j < dnaStr.length; j++) {
    sequence = sequence.substring(1);
    //remove first char
    sequence += dnaStr[j];
    //add next char
    if (!dnaHash[sequence]) {
      dnaHash[sequence] = 1;
      //if the hash doesnt exist yet
    } else {
      dnaHash[sequence]++;
    }
    if (dnaHash[sequence] === 2) {
      //once there is 2 of them push to result arr
      resultArr.push(sequence);
    }
  }
  return resultArr;
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"));
