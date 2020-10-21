const leapYears = function(year) {
    let d4 = (year % 4) === 0;
    let d100 = (year % 100) === 0;
    let d400 = (year % 400) === 0;
    let isLeap = (d100 && d400) || ((!d100) && d4);
    return isLeap;
}

module.exports = leapYears
