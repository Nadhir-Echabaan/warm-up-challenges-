//ex 2
function longestStr (arr) {
  let i = 1
  let max = arr[0]
  while (i < arr.length) {
      if (typeof arr[i] === 'string' && arr[i].length  > max.length) max = arr[i]
      i++
  }
  return max
}