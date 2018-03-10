export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state, key) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};

/* Reset localStorage every 3 minutes so weather is updated */

let id;

const test = () => {
  const refreshTime = 1000 * 180;
  id = setInterval(otherTest, refreshTime);
};

const otherTest = () => localStorage.clear();

test();
