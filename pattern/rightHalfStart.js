function rightHalfStar(row) {
  /*
        *
       **
      ***
     ****
    
    */
  let str = "";
  for (let i = 1; i <= row; i++) {
    // here is the loop for print a black_space.
    for (let j = 0; j < row - i; j++) {
      str += " ";
    }
    // this loop help to print a star.
    for (let z = 0; z < i; z++) {
      str += "*";
    }
    // this line help to move the next line.
    str += "\n";
  }

  return str;
}

console.log(rightHalfStar(7));
