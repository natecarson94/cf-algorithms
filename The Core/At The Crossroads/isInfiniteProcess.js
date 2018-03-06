function isInfiniteProcess(a, b) {
  if (a > b) {
    return true;
  } else {
    let x = b - a;
    return x % 2 !== 0;
  }
}
