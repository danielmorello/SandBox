
function isEqualTo100 (a) {
    return a === 100;
};

function areEqualTo100 (a, b) {
    return a === 100 || b === 10;
};

function isSumEqualTo100 (a, b) {
    return a + b === 100;
};

const result = isEqualTo100 (50);
console.log(result);

const result2 = areEqualTo100 (5,5);
console.log(result2);

const result3 = isSumEqualTo100 (20,80);
console.log(result3);

const result4 = isSumEqualTo100 (10,80) || areEqualTo100 (100,80);
console.log(result4);
