function countourMode(matrix, a, b) {
    console.log(matrix.length);
    let contour = [];
    contour = matrix.map((subArr, index) => {
        if (index === 0 || index === matrix.length - 1) {
            return subArr;
        } else {
            let [y, z] = [matrix[index][0], matrix[index][matrix.length - 1]];
            return [y, z];
        }
    })
    //Flatten contour into a single dimension array
    contour = contour.reduce((accum, val) => {
        while(val.length > 0) {
            accum.push(val.pop());
        }
        return accum;
    }, []);
    contour = contour.filter(val => val >= -1 && val <= 7);
    console.log(contour);
    contour = contour.reduce((accum, val) => {
        if(!accum[val]) {
            accum[val] = 0;
        }
        accum[val]++;
        return accum;
    }, {});
    // let max = Math.max(...contour);
    // console.log(max);
    let answer = [];
    contour.max = 0;
    contour.big;
    for(let prop in contour) {
        if (contour[prop] > contour.max) {
            contour.max = contour[prop];
            contour.big = prop;
        }
    }
    let count = 0;
    for(let prop in contour) {
        if (contour[prop] === contour.max) {
            count++;
        }
    }
    console.log('count', count);
    if (count === 2) {
        answer.push(contour.max);
        answer.push([parseInt(contour.big)]);
        // return contour.big;
        // answer.push(1);
    }


    // contour.push(matrix.pop());
    // contour.concat(matrix.shift());
    console.log(contour);
    console.log(answer);
    return contour;
}






M = [[ 1, 3, -4,  5, -2,  5,   1], 
     [2,  0, -7,  6,  8,  8,  15],
     [4,  4, -2,-10,  7, -1,   7],
     [-1, 3,  1,  0, 11,  4,  21],
     [-7, 6, -4, 10,  5,  7,   6],
     [-5, 4,  3, -5,  7,  8,  17],
     [-11,3,  4, -8,  6, 16,   4]];

     M1 = [[ 1,   3, -4,   5,  1,  5,  1], 
    [  2,   0, -7,   6,  8,  8, 15],
    [  4,   4, -2, -10,  7, -1,  7]
    [ -1,   3,  1,   0, 11,  4, 21],
    [ 7,   6, -4,  10,  5,  7,  6],
    [ 5,   4,  3,  -5,   7,  8, 17],
    [-11,   3,  4,  -8,  7, 16,  4]];

countourMode(M, -1, 7);
countourMode(M1, -1, 7);

