// ex 2
function flattenArray(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}
function difference(arr1, arr2) {
  const combined = flattenArray(arr1).concat(flattenArray(arr2));
  const uniqueElements = [...new Set(combined)];
  return uniqueElements.sort((a, b) => a - b);
}