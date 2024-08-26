function unroll(squareArray) {
    let result = [];
    if (squareArray.length === 0) return result;
  
    let top = 0;
    let bottom = squareArray.length - 1;
    let left = 0;
    let right = squareArray[0].length - 1;
  
    while (top <= bottom && left <= right) {
      // Move left to right in the first row
      for (let i = left; i <= right; i++) {
        result.push(squareArray[top][i]);
      }
      top++;
      // Move down the right-most column
      for (let i = top; i <= bottom; i++) {
        result.push(squareArray[i][right]);
      }
      right--;
      // Move right to left in the last row
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(squareArray[bottom][i]);
        }
        bottom--;
      }
      // Move up the left column
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(squareArray[i][left]);
        }
        left++;
      }
    }
    return result;
  }
  
  module.exports = unroll;
  
