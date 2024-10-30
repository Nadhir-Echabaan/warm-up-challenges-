//ex 14
function factoriel (n) {
  let fact = 1 ;
  for (let i = n ; i > 1 ; i--) {
      fact = fact * i
  }
  return fact
}