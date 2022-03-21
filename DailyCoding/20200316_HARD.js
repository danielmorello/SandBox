/**
 * Given an array of integers, find the first missing positive integer in linear time and constant space.
 * In other words, find the lowest positive integer that does not exist in the array.
 * The array can contain duplicates and negative numbers as well.
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 * You can modify the input array in-place.
 */

function missingNumber (givenArray){
    var sortedArray = givenArray.sort();
    
    const found = sortedArray.findIndex(element => element >= 0);
    
    const newArray = sortedArray.slice(found);
    var lowestValue = newArray[0];

    newArray.map(function (num) {
        console.log(lowestValue);
        if(num != lowestValue){
            //console.log(num);
            return missingFound = num;
        };
        lowestValue++;
    });

   // console.log(lowestValue);
    //console.log(newArray);

      
    return missingFound;
};

const arrayTest = [3, 4, -1, 1];
console.log(missingNumber(arrayTest));