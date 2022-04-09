const palindromes = function (s) {
    var re = /[\W_]/g


    return s.toLowerCase().replace(re,'') == s.toLowerCase().replace(re,'').split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
