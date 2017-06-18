function mazeRunner(maze, directions) {
  //Find the coordinates of the startpoint (2); store in startCoord as [x, y]
  const startCoord = []; 
  maze.forEach((subArr, index) => {
    let x = subArr.indexOf(2);
    if(x !== -1) {
        startCoord[0] = x;
        startCoord[1] = index;
    }
  });
  console.log(startCoord);
    let result;
    let currentCoord = startCoord;
    let currentPoint = maze[startCoord[0]][startCoord[1]];    
    // directions.forEach(val => 
    for(let i = 0; i < directions.length; i++) {
        let val = directions[i];
        //Next if we're moving
        let nextPoint;
        let nextCoord = currentCoord;
        //Find out what the next point would be, given the direction
        if(val === "N") {
            nextPoint = maze[currentCoord[0]][currentCoord[1] - 1];
            nextCoord[1] = nextCoord[1] - 1;
        } else if(val === "E") {
            nextPoint = maze[currentCoord[0] + 1][currentCoord[1]];  
            nextCoord[0] = nextCoord[0] + 1;                      
        } else if(val === "S") {
            nextPoint = maze[currentCoord[0]][currentCoord[1] + 1];            
            nextCoord[1] = nextCoord[1] + 1;            
        } else if(val === "W") {
            nextPoint = maze[currentCoord[0] - 1][currentCoord[1]];            
            nextCoord[0] = nextCoord[0] + 1;            
        }
        //Depending on what nextPoint would be, update currentPoint and currentCoord for the next loop; beak out if undefined or 3 is found
        if(nextPoint === "undefined") {
            result = "Dead";
            break;
        } else if(nextPoint === 3) {
            result = "finish";
            break;
        } else if(nextPoint === 0 || nextPoint === 2) {
            currentPoint = nextPoint;
            currentCoord = nextCoord;
        }
        console.log(nextCoord, "Next Point: ", nextPoint);
        
    };
    console.log(result);
}
function handlePoint() {

}


maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]

mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]);