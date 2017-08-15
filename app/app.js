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

function getDayOfWeek(n)
{
    var day;
    var dayOfThe_Week;

    switch (n) {
        case (1):
            dayOfTheWeek = 'Monday';
            break;
        case (2):
            dayOfTheWeek = "Tuesday";
            break;
        case (3):
            dayOfTheWeek = "Wednesday";
            break
        case (4):
            dayOfTheWeek = "Thursday";
            break;
        case (5):
            dayOfTheWeek = "Friday";
            break;
        case (6):
            dayOfTheWeek = "Saturday";
            break;
        case (7):
            dayOfTheWeek = "Sunday";
            break;
        default:
            dayOfTheWeek = "Invalid Weekday";
            break;
    }

    console.log( n);
    return dayOfTheWeek;
}

module.exports = {
    getDescendingNumbers: getDescendingNumbers,
    getDayOfWeek : getDayOfWeek
};
