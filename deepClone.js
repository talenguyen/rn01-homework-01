const isObject = (target) => typeof target === "object" && target !== null;

const deepClone = (target) => {
  if (!isObject(target)) {
    return target;
  }

  return Object.keys(target).reduce((acc, cur) => {
    return {
      ...acc,
      [cur]: deepClone(target[cur]),
    };
  }, {});
};

module.exports = deepClone;
