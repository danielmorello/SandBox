function addString (givenString) {
    
    const testStart = givenString.startsWith('New!');

    if(!testStart){
        newString = ('New!').concat(' ', givenString);
    }
    else{
        newString = givenString;
    };

    return newString;
};

console.log(addString('New! Uyara'));