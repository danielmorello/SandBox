function firstHalf(givenString){
    const half = givenString.length / 2;
    
    const newString = givenString.substring(0,half);

    return newString;
};

console.log(firstHalf('casa'));