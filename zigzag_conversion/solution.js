/*
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) { // if rows is 1, then there's no zigzagging
      return s;
    }
  
    const zigZagGrid = buildZigZagGrid(s, numRows); // calling our helper function to build the grid
    let result = ''; // establish to build our string
  
    for(let i = 0; i < zigZagGrid.length; i++) { // go through the grid to make the string
      result += zigZagGrid[i].join('');
    }
  
    return result;
  };
  
  function buildZigZagGrid(s, numRows) {
    const zigZagGrid = Array.from({ length: numRows }, () => []); // we are constructing an empty matrix that is has numRows
    
    let row = null; // establish for our loop
    let rowIndex = null; // establish for our loop
    let traversing = false; // establish for our loop
  
    for(let char of s) { // traverse each character in the string
      if(row === null) { // if the row is null we start at row 0
        row = 0;
        rowIndex = 0;
      } else { // now we need to check where the character belongs in our matrix
        if(!traversing) { // if the traversing marker is false, we increase the row marker and also check if the row is equal to the numRows - 1
          
          row += 1; 
          
          if(row === numRows - 1) {
            traversing = true;
          }
        } else { // if the traversing marker is true then we decrease the row marker and increase the row index, going back up the zigzag
          row -= 1;
          rowIndex += 1;
  
          if(row === 0) { // once the row hits zero we are done traversing
            traversing = false;
          }
        }
      }
  
      zigZagGrid[row][rowIndex] = char; // each character gets placed
    }
  
    return zigZagGrid; // recturn the grid
  }