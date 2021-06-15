const isObject = (target) => typeof target === "object" && target !== null;

const isObjectEqual = (subject1, subject2) => {
  if (Object.keys(subject1).length !== Object.keys(subject2).length) {
    return false;
  }

  for (const key in subject1) {
    if (isEqual(subject1[key], subject2[key]) === false) {
      return false;
    }
  }

  return true;
};

const isArrayEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  for (const index in array1) {
    if (isEqual(array1[index], array2[index]) === false) {
      return false;
    }
  }

  return true;
};

const isEqual = (subject1, subject2) => {
  if (Array.isArray(subject1)) {
    return Array.isArray(subject2) && isArrayEqual(subject1, subject2);
  }

  if (isObject(subject1)) {
    return isObject(subject2) && isObjectEqual(subject1, subject2);
  }

  return subject1 === subject2;
};

module.exports = isEqual;
