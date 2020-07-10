//12. Solve the following with iteration
////1. Counting Sheep

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
function triNum(num) {
    let sum = 0;
    for(i=num; i>0; i--){
        sum = sum + i;
    }
    return sum;
}

//console.log(triNum(6))

////5. String Splitter
//in progress
function splitOn(string, char) {
    for(i=0; i<string.length; i++){
        //console.log(string.charAt(i))
        if(string.charAt(i) == char){
            console.log(string.charAt(i))
        }
    }
    console.log(string, char)
}

console.log(splitOn('02/20/2020', '/'))