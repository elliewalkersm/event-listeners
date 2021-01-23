// console.log("It worked");

function numberOne(fact) {
  return 'My name is ellie'
}

function numberTwo(fact) {
  return 'I love dogs'
}

function numberThree(fact, cb) {
  return cb(fact)
}

console.log(numberThree('fun fact:', numberTwo))
