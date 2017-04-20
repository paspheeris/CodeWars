function decompose(num, answer=[]) {
  var newNum = num;
  var answerSum = answer.reduce(function(acc, val) {
    return acc + Math.pow(val, 2);
  }, 0);
  //base case
  if(answerSum + Math.pow(num - 1) >= Math.pow(num)) {
    return answer;
  }
  //recurse case
  answer.unshift()
  else {
    return decompose(newNum - 1, answer)
  }
}
