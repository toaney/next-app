'use client';

export default function Practice3(){
  console.log("practice 3")

  const grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
  ]

  const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
  ]



  // helper function - add adjacent positions
  function addAdjacent(i, j, grid, visited){
    let adjacent = [];

    if (i > 0 && !visited[i - 1][j]) adjacent.push([i - 1, j]);
    if (i < grid.length - 1 && !visited[i + 1][j]) adjacent.push([i + 1, j]);
    if (j > 0 && !visited[i][j - 1]) adjacent.push([i, j - 1]);
    if (j < grid[0].length - 1 && !visited[i][j + 1]) adjacent.push([i, j + 1]);

    // let adjacent = []
    // // - check for out of bounds values
    // // - add top
    // if (i > 0 && !visited[i - 1][j]) adjacent.push([i - 1, j])
    // // - add bottom
    // if (i < grid.length - 1 && !visited[i + 1][j]) adjacent.push([i + 1, j])
    // // - add left
    // if (j > 0 && !visited[i][j - 1]) adjacent.push([i, j - 1])
    // // - add right
    // if (j < grid[0].length - 1 && !visited[i][j + 1]) adjacent.push([i, j + 1])

    // return adjacent


    return adjacent
  }


  // helper function - dfs
  function DFS(i, j, grid, visited){
    let islandSize = 0;
    let stack = [[i, j]];

    while (stack.length){
      let current = stack.pop();
      // console.log(current);
      let [i, j] = current;

      //check if current has been visited already
      if (visited[i][j]) continue;
      visited[i][j] = true;

      if (grid[i][j] === "0") continue;

      islandSize++ 
      let adjacent = addAdjacent(i, j, grid, visited)
      stack.push(...adjacent)
  
    }

    return islandSize > 0 ?  true : false;
  }


  // main function
  // create variables i, j, visited, grid, islandCount

  function findIslands(grid){
    let visited = grid.map(row => row.map(item => false))
    let islandCount = 0;

    // iterate over grid
    for (let i = 0; i < grid.length; i++){
      for (let j = 0; j < grid[i].length; j++){
        // do a depth first search on position
        if (DFS(i, j, grid, visited)) islandCount++
      }
    }

    return islandCount
  }

  console.log(findIslands(grid2))


  return <h3>Practice 3</h3>
}