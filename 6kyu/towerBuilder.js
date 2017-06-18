function towerBuilder(nFloors) {
  // build here
  const arr = [];
  for(var i = 0, j = 1; i < nFloors; i++, j += 2) {
      let str = '';
      let spaces = nFloors - 1 - i;
      for(let z = 0; z < spaces; z++) {str += ' '};
      while(str.length - spaces < j) {
        str += '*';
      }
      for(let z = 0; z < spaces; z++) {str += ' '};      
      arr.push(str);
    }
    console.log(arr);
    return arr;
  }
  towerBuilder(3);

