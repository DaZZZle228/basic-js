const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  
  let teamName = members.map(member => {
    if (typeof (member) === "string") {
      return member.trim().slice(0, 1).toUpperCase();
    }
  }).sort().join('');

  return teamName;
};
