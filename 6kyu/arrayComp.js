function comp(array1, array2){
    if(array1 === null || array2 === null) {
        return false;
    }
  //your code here
  const array2Root =  array2.map(val => {
      return Math.sqrt(val);
  });
  array1.sort();
  array2Root.sort();
  const equiv = array1.every((val, index) => {
    return array1[index] === array2Root[index];
  });
  console.log(equiv);
  return equiv;
}


a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
comp(a1, a2);