function getDescendingNumbers(start, stop)
{
    if (typeof start !== 'number' || typeof stop !== 'number' || start <= stop) {
        return false;
    }
    var result = start;
    for (var i = start - 1; i >= stop; i--) {
        result = result + ' ' + i;
    }
    return result;
}

function isNegativeNumber(number)
{
    var isNegative = false;
    if (number <= 0) {
        isNegative = true;
    }

    console.log(isNegative);

    return isnegative;
}

module.exports = {
    getDescendingNumbers: getDescendingNumbers
    isNegativeNumber : isNN
};
