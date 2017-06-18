function range(a, b, c) {
    let min;
    let max;
    let step;
    const result = [];
    if(arguments.length === 3) {
        min = a;
        max = c;
        step = b;
    } else if(arguments.length === 2 ) {
        min = a;
        max = b;
        step = 1;
    } else {
        max = a;
        min = 1;
        step = 1;
    }
    for(let i = min; i <= max; i += step) {
        result.push(i);
    }
    console.log(result);
    return result;
}