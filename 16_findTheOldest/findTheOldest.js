const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

const findTheOldest = function (array) {
  return array.reduce((oldest, current) => {
    let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
    let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    return oldestAge > currentAge ? oldest : current;
  })
};

// Do not edit below this line
module.exports = findTheOldest;
