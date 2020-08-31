const trialDivision = (number) => {

  if (!Number.isInteger(number)) return false

  if (number < 1 || number == 0 || number == 1 || number == 4) return false;

  var counter = 2

  while (counter < number) {
    if ((number % counter) == 0) {
      return false;
    }
    counter++
  }

  return true

}

module.exports = trialDivision;