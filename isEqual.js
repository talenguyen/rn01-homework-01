const isEqual = (subject1, subject2) => {
  if (Object.keys(subject1).length !== Object.keys(subject2).length) {
    return false;
  }

  for (const key in subject1) {
    if (subject1[key] !== subject2[key]) {
      return false;
    }
  }
  
  return true;
};

module.exports = isEqual;
