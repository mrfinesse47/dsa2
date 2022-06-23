var backspaceCompare = function (l, r) {
  let lPtr = l.length - 1;
  let rPtr = r.length - 1;
  let lSkip = 0;
  let rSkip = 0;
  while (lPtr >= 0 || rPtr >= 0) {
    if (l[lPtr] === "#" || r[rPtr] === "#") {
      if (l[lPtr] === "#") {
        lSkip++;
        lPtr--;
      }
      if (r[rPtr] === "#") {
        rSkip++;
        rPtr--;
      }
    } else if (lSkip || rSkip) {
      if (lSkip) {
        lSkip--;
        lPtr--;
      }
      if (rSkip) {
        rSkip--;
        rPtr--;
      }
    } else {
      console.log("compare", l[lPtr], r[rPtr]);
      if (l[lPtr] !== r[rPtr]) return false;
      rPtr--;
      lPtr--;
    }
  }

  return true;
};

const s = "ab##",
  t = "c#d#";

console.log(backspaceCompare(s, t));
