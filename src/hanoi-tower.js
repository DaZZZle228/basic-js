const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  const turns = Math.pow(2, diskNumber) - 1;
  const turnsPerSec = turnsSpeed / 3600;
  const seconds = Math.floor(turns / turnsPerSec);
  return {turns,seconds,}
};
