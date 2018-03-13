const has = Object.prototype.hasOwnProperty;

const toArray = words => {
  return words.split('');
};

const isEnd = obj => {
  return typeof obj === 'number';
};

const removeLastChar = string => {
  return string.slice(0, string.length - 1);
};

const doesNotExist = (node, letter) => {
  return !node[letter];
};

const sort = wordsObj => {
  let sortedArr = wordsObj.sort((a, b) => {
    return b.selectionCount - a.selectionCount;
  });
  let words = sortedArr.map(word => word.word);
  return words;
};

export { has, toArray, isEnd, removeLastChar, doesNotExist, sort };
