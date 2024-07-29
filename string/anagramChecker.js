function anagramChecker(str1, str2) {
  if (str1.length !== str2.length) return false;
  let objStr1 = {};

  for (const key of str1) {
    objStr1[key] = (objStr1[key] || 0) + 1;
  }

  for (const key of str2) {
    if (!objStr1[key]) {
      return false;
    }

    objStr1[key]--;
  }
  //   console.log(objStr1);
  return true;
}

console.log(anagramChecker("hello", "olleh"));
