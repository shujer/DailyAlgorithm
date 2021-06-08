module.exports = function tictok(fn, ...args) {
  const startTime = new Date().getTime();
  const result = fn(...args);
  const endTime = new Date().getTime();
  console.log("excuting time: ", endTime - startTime, " ms");
  console.log("result: ", result);
};
