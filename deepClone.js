const isObject = (target) => typeof target === "object" && target !== null;

const cloneObject = (object) => {
  return Object.keys(object).reduce((acc, cur) => {
    return {
      ...acc,
      [cur]: deepClone(object[cur]),
    };
  }, {});
};

const deepClone = (target) => {
  if (isObject(target)) {
    return cloneObject(target);
  }
  return target;
};

module.exports = deepClone;
