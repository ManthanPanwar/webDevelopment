let temp = 308;
let unit = "C";

const tempConversion = function (temp, unit) {
  if (unit === "K") return temp + 273;
  else if (unit === "C") return temp - 273;
};

console.log(tempConversion(temp, unit));
