function pattern(row) {
  let str = "";
  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern(6));
