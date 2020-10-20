const repeatString = function(string, number) {
    if (number < 0) {
        return "ERROR";
    }
    else {
        let newString = ""; 
        for (i = 0; i < number; i++) {
            newString += string;
        }
        return newString;
    }
}

module.exports = repeatString
