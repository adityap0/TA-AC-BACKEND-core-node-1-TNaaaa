let areaSq = (side) => {
  return side * side;
};

let rectangleArea = (l, b) => {
  return l * b;
};
let circleArea = (r) => {
  return 3.14 * r * r;
};

module.exports = {
  areaSq,
  rectangleArea,
  circleArea,
};
