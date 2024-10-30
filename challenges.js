"use strict";
// warm up 1 : ex 1
function unzip(arr) {
  let output = [];
  let NumArr = [];
  let StrArr = [];
  let BoolArr = [];
  arr = arr.flat();
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") NumArr.push(arr[i]);
    else if (typeof arr[i] === "boolean") BoolArr.push(arr[i]);
    else if (typeof arr[i] === "string") StrArr.push(arr[i]);
  }
  output.push(NumArr, StrArr, BoolArr);
  return output;
}