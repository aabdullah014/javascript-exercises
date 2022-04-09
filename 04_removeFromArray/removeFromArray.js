const removeFromArray = function(arr, t1 = undefined, t2 = undefined, t3 = undefined, t4 = undefined) {
    let ans = []
    let target = []

    if(t1 != undefined){
        target.push(t1)
    }
    if(t2 != undefined){
        target.push(t2)
    }
    if(t3 != undefined){
        target.push(t3)
    }
    if(t4 != undefined){
        target.push(t4)
    }

    for(i = 0; i< arr.length; i++){
        if(!target.includes(arr[i])){
            ans.push(arr[i])
        }
    }

    return ans
};

// Do not edit below this line
module.exports = removeFromArray;
