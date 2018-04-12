console.log(sum(1, 4, 5, 7, 9));

sum = () => {
    var i;
    var sum = 0;
    
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}