let { readFileSync } = require("fs");
let commands = readFileSync("input.txt", "utf-8");

function solve(first, input) {
  let path = [];
  let dirSizes = {};
  input.trim().split('\n').forEach(line => {
    let cmd = line.split(' ');
    if (cmd[0] == '$') {
      if (cmd[1] == 'cd') {
        (cmd[2] == '..') ? path.pop() : path.push(cmd[2]);
      }
    } else if (cmd[0] != 'dir') {
      let size = parseInt(cmd[0]);
      for (let i = 0; i < path.length; i++) {
        let dir = path.slice(0, i + 1).join('/');
        if (dir.length > 1) {
          dir = dir.substring(1);
        }
        if (!dirSizes.hasOwnProperty(dir)) {
          dirSizes[dir] = 0;
        }
        dirSizes[dir] += size;;
      }
    }
  })
  let required = dirSizes['/'] - (70000000 - 30000000);
  return first 
  ? Object.values(dirSizes).filter((ss) => ss <= 100000).reduce((a, c) => a + c, 0)
  : Math.min(...Object.values(dirSizes).filter((ss) => ss >= required));
}
console.log(solve(true, commands));
console.log(solve(false, commands));

