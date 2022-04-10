const findTheOldest = function(arr) {
    const deathYear = new Date().getFullYear()
    const ages = arr.map((obj) => (obj["yearOfDeath"] || deathYear) - obj["yearOfBirth"])
    const maxAge = Math.max(...ages)

    const ans = arr.find((obj) => (obj["yearOfDeath"] || deathYear) - obj["yearOfBirth"] == maxAge)
    return ans
};

// Do not edit below this line
module.exports = findTheOldest;
