function addString (givenstring1, givenstring2){
    const newString = givenstring1.substring(1,givenstring1.length).concat(givenstring2.substring(1,givenstring2.length));
    return newString;
};

console.log(addString('Uyara', 'Morello'));