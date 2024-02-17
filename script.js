function drawTriangle(numRows, numCols){
   for (let i = 0; i < numRows; i++){
      let boxChar = "*";
      for (let j = 0; j < i; j++){
         boxChar += "*";
      }
      console.log(boxChar);
   }
}
drawTriangle(4, 4);

