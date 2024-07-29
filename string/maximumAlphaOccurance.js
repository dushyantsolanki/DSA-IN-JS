function occurance(str1) {
  let str2 = new String(str1);
  let str = str2.replace(" ", "");
  let obj = {};
  for (const key of str) {
    obj[key] = (obj[key] || 0) + 1;
  }
  console.log(obj);
}

occurance("parth parekh");
