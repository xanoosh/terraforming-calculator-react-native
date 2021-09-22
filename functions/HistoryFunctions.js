import {
  getResourceHistory,
  updateResourceHistory,
  createNewHistoryElement,
  setValuesFromLastHistoryElement,
  getRelatedSetter,
} from './BaseFunctions.js';

//load values from history or create new history from values array, set generation count
const loadValuesFromHistoryArray = async (valuesArray, setGeneration) => {
  const historyArray = await getResourceHistory();
  if (historyArray) {
    setValuesFromLastHistoryElement(historyArray, valuesArray);
    setGeneration(historyArray.length);
  } else {
    for (const el of valuesArray) {
      const setter = getRelatedSetter(el.name, valuesArray);
      setter(Number(el.value));
    }
    const startingArray = [createNewHistoryElement(valuesArray)];
    updateResourceHistory(startingArray);
    setGeneration(startingArray);
  }
};
// add new history element from values array and set generation count
const addNewHistoryElement = async (valuesArray, setGeneration) => {
  const current = await getResourceHistory('historyArray');
  if (current) {
    const newArray = [...current, createNewHistoryElement(valuesArray)];
    updateResourceHistory(newArray);
    setGeneration(newArray.length);
  }
};
//remove last element from history array and set generation count
const removeLastHistoryElement = async (valuesArray, setGeneration) => {
  const historyArray = await getResourceHistory('historyArray');
  if (historyArray && historyArray.length > 1) {
    historyArray.pop();
    updateResourceHistory(historyArray);
    setValuesFromLastHistoryElement(historyArray, valuesArray);
    setGeneration(historyArray.length);
  }
};

export {
  loadValuesFromHistoryArray,
  addNewHistoryElement,
  removeLastHistoryElement,
};
