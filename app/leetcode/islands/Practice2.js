'use client';

export default function Practice2(){
  console.log("Practice2");

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




    // addAdjacent helper function
    function addAdjacent(i, j, grid, visited){
      let adjacent = []
      // - check for out of bounds values
      // - add top
      if (i > 0 && !visited[i - 1][j]) adjacent.push([i - 1, j])
      // - add bottom
      if (i < grid.length - 1 && !visited[i + 1][j]) adjacent.push([i + 1, j])
      // - add left
      if (j > 0 && !visited[i][j - 1]) adjacent.push([i, j - 1])
      // - add right
      if (j < grid[0].length - 1 && !visited[i][j + 1]) adjacent.push([i, j + 1])

      return adjacent
    }

    // dfs helper function
    function dfs(i, j, grid, visited){
      // - dfs using a stack; 
      // - create island size variable;
      let stack = [[i, j]];
      let islandSize = 0;

      while (stack.length){
        // - add i, j to stack
        let current = stack.pop()
        let [i, j] = current
  
        // pop() top of the stack
  
        // - check if i, j exists in our visited variable; continue if true
        if (visited[i][j]) continue
        // - mark i, j as true in our visited variable
        visited[i][j] = true;
  
        // - if i, j is 1
  
        if (grid[i][j] === "0") continue

        if (grid[i][j] === "1") {
          //   - increment island size variable
          //   - add adjacent positions to the stack using addAdjacent helper function
          islandSize++

          let adjNeighbors = addAdjacent(i, j, grid, visited)
          stack.push(...adjNeighbors)
        }

      }

      // - if island size > 0; return true
      return islandSize > 0 ? true : false
    }

    // main function logic
    function findIslands(grid){
      let numIslands = 0;
      // - create variable visited: copy of grid to track if locaton has already been visited
      let visited = grid.map((row) => row.map(item => false))
      // console.log(visited)

      // - iterate over grid with nested for loop
      for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
          //     - pass arguments (i, j, grid, visited) to dfs helper function
          //     - if dfs helper function returns true, increment numIslands
          if (dfs(i, j, grid, visited)) numIslands++
        }
      }


      return numIslands
    }

    console.log(findIslands(grid2))



  return <h4>Practice 2</h4>
}