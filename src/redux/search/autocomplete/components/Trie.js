import { has, toArray, isEnd, removeLastChar, doesNotExist, sort } from './Helpers';

class Trie {
  constructor() {
    this.words = {};
    this.count = 0;
  }

  populate(array) {
    array.forEach(word => this.insert(word));
  }

  insert(word) {
    let currNode = this.words;
    const arrayOfLetters = toArray(word);

    arrayOfLetters.forEach(letter => {
      if (!has.call(currNode, letter)) {
        currNode[letter] = {};
      }
      currNode = currNode[letter];
    });

    if (!has.call(currNode, '*')) {
      currNode['*'] = 0;
    }

    this.count += 1;
  }

  suggest(prefix) {
    let startNode = this._getLastNodeOf(prefix);
    const suggestions = this._traverse(startNode, prefix);
    const sortedSuggestions = sort(suggestions);
    return sortedSuggestions;
  }

  select(word) {
    let currNode = this._getLastNodeOf(word);
    if (has.call(currNode, '*')) {
      currNode['*']++;
      return;
    }
  }

  _getLastNodeOf(word) {
    let currNode = this.words;
    const arrayOfLetters = toArray(word);

    arrayOfLetters.forEach(letter => {
      let data = [currNode, letter, word];
      currNode = this._getNextNodeFrom(data);
    });

    return currNode;
  }

  _getNextNodeFrom(data) {
    let [currNode, letter, word] = data;

    if (doesNotExist(currNode, letter)) {
      this._handleError(word);
    }

    const nextNode = currNode[letter];
    return nextNode;
  }

  _traverse(startNode, prefix, arr = []) {
    if (isEnd(startNode)) {
      let selectionCount = startNode;
      let word = removeLastChar(prefix);
      return { word, selectionCount };
    }

    for (let key in startNode) {
      let currNode = startNode[key];
      let word = prefix + key;
      word = this._traverse(currNode, word, arr);
      if (word.hasOwnProperty('word')) {
        arr.push(word);
      }
    }
    return arr;
  }

  _handleError(word) {
    throw new Error(`"${word}" not found. Please try again :)`);
  }
}

export default Trie;
