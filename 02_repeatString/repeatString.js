const repeatString = function(string, num) {
    if(num >= 0){
        let s = ""
        for(i=0; i<num; i++){
            s = s.concat(string)
        }

        return s
    } else {return "ERROR"}
};

// Do not edit below this line
module.exports = repeatString;
