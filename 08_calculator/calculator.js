const add = function(...nums) {
	return nums.reduce((a,b) => a+b)
};

const subtract = function(...nums) {
	return nums.reduce((a,b) => a-b)
};

const sum = function(nums) {
  if(nums.length == 0){
    return 0
  }
	return nums.reduce((a,b) => a+b)
};

const multiply = function(nums) {
  return nums.reduce((a,b) => a*b)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  res = 1
	for(i=1;i<=a;i++){
    res*=i
  }
  return res
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
