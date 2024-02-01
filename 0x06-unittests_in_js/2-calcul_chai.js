/* eslint-disable */

function calculateNumber(type, a, b) {
  let first = Math.round(a);
  let sec = Math.round(b);

  if (type === "SUM") {
    return first + sec;
  } else if (type === "SUBTRACT") {
    return first - sec;
  } else if (type === "DIVIDE") {
    if (sec === 0) {
      return "Error";
    } else {
      return first / sec;
    }
  }
}

module.exports = calculateNumber;
