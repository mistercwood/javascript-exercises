const sumAll = function(a,b) {
    if ((typeof (a) != "number") || (typeof (b) != "number")) {
        return "ERROR";
    }
    else if ((a < 0) || (b < 0)) {
        return "ERROR";
    }
    else {
    let large = (a > b) ? a : b;
    let small = (a > b) ? b : a;
    let total = 0;
    for (let i = small; i < (large + 1); i++) {
        total += i;
    }
    return total;
    }
}

module.exports = sumAll
