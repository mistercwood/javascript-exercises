const reverseString = function(inputString) {
        let input = inputString.split("");
        let reversed = [];
        while (input.length > 0) {
            let x = input.pop();
            reversed.push(x);
        }
        output = reversed.join("");
        return output; 
}

module.exports = reverseString
