//ex 1
function removeStr(str,chr,i) {
  if (str[i] === chr) console.log(str.replace(str[i],''))
  else if (str.indexOf(chr) === -1) console.log(`${chr} does not exist in this string`)
  else console.log(`${chr} does not exist at this position`)
}