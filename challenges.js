//ex 10
function repeat (str,n) {
  for (let i = 1 ; i < n ; i++) {
      str += str
  }
  return str
}