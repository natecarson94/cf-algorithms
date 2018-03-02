// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

// Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  let valueCount = 0;
  if (value1 > value2) {
    if (weight1 <= maxW) {
      maxW -= weight1;
      valueCount += value1;
    }
    if (weight2 <= maxW) {
      maxW -= weight2;
      valueCount += value2;
    }
  } else {
    if (weight2 <= maxW) {
      maxW -= weight2;
      valueCount += value2;
    }
    if (weight1 <= maxW) {
      maxW -= weight1;
      valueCount += value1;
    }
  }

  return valueCount;
}
