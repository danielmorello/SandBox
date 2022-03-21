function newString3Char(givenString){

    if (givenString.length > 3){
        const first3Char = givenString.substring(0,3);
        const last3Char = givenString.substring(givenString.length-3,givenString.length);
        newString = first3Char.concat(last3Char);
    }
    else{
        newString = givenString;
    };
    

    return newString;
};

console.log(newString3Char('Palmeiras'));