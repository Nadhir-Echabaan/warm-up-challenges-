//ex 10
function FlatCase(str) {
  let test = true;
  let i = 0 ;
  if (typeof str !== 'string') {
      test = false
      console.log('it must be a string')
  }
  while (test && i < str.length) {
      if (str[i] === str[i].toUpperCase()) test = false
      else i++
  }
  return test
}