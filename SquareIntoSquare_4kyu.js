function decompose(num) {
  var answer = [];
  var givenSquare = Math.pow(num, 2);
  //answer.shift(num - 1);

  var curNum = num - 1;
  var running = 0;
  while(running <= givenSquare && curNum > 0) {
    console.log(curNum);
    console.log(running);
    console.log(answer);
    if ((running + Math.pow(curNum, 2)) > givenSquare) {
      curNum--;
    } else {
      answer.unshift(curNum);
      curNum--;
      running = answer.reduce(function(acc, val) {
        return acc + Math.pow(val, 2);
      }, 0);
    }
  }
  return answer;
}
decompose(9);
