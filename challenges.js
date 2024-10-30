//ex 8
function swapcase(str) {
  let new_str = ''
  for (let i = 0 ; i < str.length ; i++) {
      if (str[i] === str[i].toUpperCase()) new_str = new_str + str[i].toLowerCase()
      else if (str[i] === str[i].toLowerCase()) new_str = new_str + str[i].toUpperCase()
  }
  return new_str
}