const leapYears = function(year) {
    if(year > 0){
        if((year%4 == 0 && year%100 != 0) || year%400==0){
            return true
        }
        return false
    } else {return "ERROR"}
};

// Do not edit below this line
module.exports = leapYears;
