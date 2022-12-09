let { readFileSync } = require("fs");
let rations = readFileSync("input.txt", "utf-8");

function solve(input, first) {
  let sum = nums => nums.reduce((x, y) => x + y);
  let elfs = (input
    .trim()
    .split('\n\n')
    .map(calories => calories
      .split('\n')
      .map(Number)));
  return first
  ? Math.max(...elfs.map(sum))
  : sum(elfs.map(sum).sort((a, b) => b - a).slice(0, 3));
}

console.log(solve(rations, true));
console.log(solve(rations, false));