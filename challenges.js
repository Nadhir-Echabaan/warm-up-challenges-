//ex 9
function humanize_format (num) {
  num = num +''
  if (num[num.length - 1] === '1') num = num + 'st'
  else if (num[num.length - 1] === '2') num = num + 'nd'
  else if (num[num.length - 1] === '3') num = num + 'rd'
  else num = num + 'th'
  return num
}