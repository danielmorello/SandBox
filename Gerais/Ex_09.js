function nearest100 (a, b){
    const howFar1 = Math.abs(100 - a);

    const howFar2 = Math.abs(100 - b);

    if(howFar1 > howFar2){
        var nearest = b;
    }
    else{
        var nearest = a;
    };
    
    return nearest;
};

console.log(nearest100(109,96));