const sumAll = function(a, b) {
    sum = 0
    let temp  = a
    if(Number.isInteger(a) && Number.isInteger(b) && (a>=0 && b >= 0)){
        if(b<a){
            temp = b;
            b=a;
            a=temp
        }
        for(i=a; i<=b;i++){
            sum += i;
        }
        return sum
    } else { return "ERROR" }

};

// Do not edit below this line
module.exports = sumAll;
