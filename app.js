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
    if(pow < 0){
        return 'exponent should be >= 0';
    }

    let returnVal = num;

    for(i=0; i<pow-1; i++){
        returnVal = returnVal * num
    }
    return returnVal;
}

//console.log(powerCalculator(10, 4))
