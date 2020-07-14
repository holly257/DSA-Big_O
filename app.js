//11. Tower of Hanoi
function moveNDisks(N, fromPeg, toPeg, extraPeg) {
    // if there's only one disk to move, then just print the move required
    if (N == 1) console.log('Move disk from Peg ' + fromPeg + ' to ' + toPeg);
    else {
        // otherwise, then call the function to move N-1 disks out of the way...
        moveNDisks(N - 1, fromPeg, extraPeg, toPeg);
        // then move 1 disk to the destination
        moveNDisks(1, fromPeg, toPeg, extraPeg);
        // and the N-1 that were out of the way should be brought back
        moveNDisks(N - 1, extraPeg, toPeg, fromPeg);
    }
}
// now, let's try a test case with 5 disks
//moveNDisks(3, 'A', 'B', 'C');


//12. Solve the following with iteration
////1. Counting Sheep
//////  O(n) Linear time
function countSheep(num) {
    if (!num) {
        return null;
    }

    for (i = num; i >= 0; i--) {
        if (i > 0) {
            console.log(i + ': Another sheep jumps over the fence');
        } else console.log('All sheep jumped over the fence');
    }

    return;
}
//countSheep(3);


////2. Power Calculator
//////  O(n) Linear time
function powerCalculator(num, pow) {
    if (pow < 0) {
        return 'exponent should be >= 0';
    }

    let returnVal = num;

    for (i = 0; i < pow - 1; i++) {
        returnVal = returnVal * num;
    }
    return returnVal;
}
//console.log(powerCalculator(10, 4))


////3. Reverse String
//////  O(n) Linear time
function stringRev(str) {
    let newStr = '';
    for (i = str.length; i > 0; i--) {
        let newChar = str.charAt(i - 1);
        newStr = ''.concat(newStr, newChar);
    }
    return newStr;
}
//console.log(stringRev('hello'));


////4. nth Triangular Number
//////  O(n) Linear time
function triNum(num) {
    let sum = 0;
    for (i = num; i > 0; i--) {
        sum = sum + i;
    }
    return sum;
}
//console.log(triNum(6))


////5. String Splitter
//////  O(n) Linear time
let string = '02/20/2020';
String.prototype.myCustomSplit = function (splitVal) {
    const outputArr = [];
    const string = this;
    let nextVal = '';
    const splitlength = splitVal.length;
    let i = 0;
    
    while (i < string.length) {
        // When the current character is same as splitVal's first character
        if (string[i] === splitVal[0]) {
            let split_length_remaining = splitlength - 1;
            let split_length_passed = 1;
            let similarSplit = string[i];

            if (!split_length_remaining) {
                outputArr.push(nextVal);
                nextVal = '';
            } else {
                nextVal += similarSplit;
            }
            i = i + split_length_passed;
        } else {
            // When the current character is different from `splitVal` 's first character
            nextVal += string[i];
            i++;
        }
    }
    outputArr.push(nextVal);
    return outputArr;
};
console.log(string.myCustomSplit('/'))


////6. Fibonacci
//////  O(n) Linear time
function getFib(num) {
    let a = 1;
    let b = 0;
    let c = null;

    while (num > 0) {
        c = a;
        a = b + a;
        b = c;
        num--;
    }

    return b;
}
//console.log(getFib(8));
//fib(5) = 5
//fib(6) = 8
//fib(7) = 13
//fib(8) = 21


////7. Factorial
//////  O(n) Linear time
function getFactorial(num) {
    if (num === 0) {
        return 1;
    }

    let sum = 1;
    for (i = 0; i < num; i++) {
        sum = (num - i) * sum;
    }

    return sum;
}
//console.log(getFactorial(4));
