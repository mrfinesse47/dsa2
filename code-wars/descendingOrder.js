function descendingOrder(n) {
  let arr = String(n).split("");

  arr = arr.sort((m, n) => n - m);
  return Number(arr.join(""));
}

descendingOrder(42145);
