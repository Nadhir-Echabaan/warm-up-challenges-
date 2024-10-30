//ex 8
for (let i = 1 ; i < 101 ; i++) {
  let msg = ''
  if (i % 5 === 0 && i % 3 === 0) msg = 'FizzBuzz';
  else if (i % 3 === 0) msg = 'Fizz';
  else if (i % 5 === 0) msg = 'Buzz'
  else msg = `${i}`
  console.log(msg)
}