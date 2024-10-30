// ex 3
function filter_array_values(arr) {
  let falsy = [false, 0, "", "", ``, null];
  let i = 0;
  let newArr = [];
  while (i < arr.length) {
    if (falsy.indexOf(arr[i]) !== -1) i++;
    else {
      newArr.push(arr[i]);
      i++;
    }
  }
  return newArr;
}