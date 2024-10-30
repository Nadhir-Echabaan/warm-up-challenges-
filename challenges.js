//ex 5
function swapHalves(arr) {
  const mid = arr.length / 2;
  const firstHalf = arr.slice(0, mid);
  const secondHalf = arr.slice(mid);
 
  return secondHalf.concat(firstHalf);
}