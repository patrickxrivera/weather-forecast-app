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

/*
=====================================================
*/

/* Reset localStorage every 3 hours so weather is updated */

const createTimer = () => {
  const threeHours = 10800;
  const oneSecond = 1000;
  const refreshTime = oneSecond * threeHours; // === three hours in seconds
  setInterval(resetTimer, refreshTime);
};

const resetTimer = () => localStorage.clear();

createTimer();
