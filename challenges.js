//ex 3
function Biggest_Even_Number (arr) {
  let test = false
  let i = 0
  let max = 'there is no even number';
  while (i < arr.length && !test) {
      if (arr[i] % 2 === 1) {
          max = arr[i]
          test = true
      }
      else i++
  }
  i++
  while(i<arr.length) {
      if (arr[i] % 2 === 1 && arr[i] > max) max = arr[i]
      i++
  }
  return max
}