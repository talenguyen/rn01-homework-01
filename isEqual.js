const isObject = (target) => typeof target === "object" && target !== null;

const isEqual = (subject1, subject2) => {
  if (isObject(subject1)) {
    if (!isObject(subject2)) {
      return false;
    }

    if (Object.keys(subject1).length !== Object.keys(subject2).length) {
      return false;
    }

    for (const key in subject1) {
      if (isEqual(subject1[key], subject2[key]) === false) {
        return false;
      }
    }

    return true;
  }

  return subject1 === subject2;
};

module.exports = isEqual;
