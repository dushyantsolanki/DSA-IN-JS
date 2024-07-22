let name = "100";
if (typeof name == "number" || "string") {
  name = String(name);
  let name1 = name.split("").reverse().join("");
  if (name === name1) {
    console.log(`Given String is Palindrom`);
  } else {
    console.log(`Given String is not Palindrom`);
  }
} else {
  console.log("please enter a string either number ");
}
