import AsyncStorage from '@react-native-async-storage/async-storage';

//get data from AsyncStorage or return false
const getResourceHistory = async () => {
  try {
    const array = await AsyncStorage.getItem('historyArray');
    if (array !== null && JSON.parse(array).length) return JSON.parse(array);
    else return false;
  } catch (e) {
    return false;
  }
};
//set AsyncStorage data to argument passed in the function
const updateResourceHistory = async (array) => {
  try {
    AsyncStorage.setItem('historyArray', JSON.stringify(array));
  } catch (e) {
    return false;
  }
};
//return object from current values to create history array element
const createNewHistoryElement = (valuesArray) => {
  return valuesArray.map((value) => ({
    name: value.name,
    value: value.value,
  }));
};
// set state for resource & points from last history element
const setValuesFromLastHistoryElement = async (array, valuesArray) => {
  const lastEl = array[array.length - 1];
  for (const el of lastEl) {
    const setter = getRelatedSetter(el.name, valuesArray);
    setter(Number(el.value));
  }
};
//mutate history array with current values as a last history element
const mutateLastHistoryElement = async (valuesArray) => {
  const historyArray = await getResourceHistory('historyArray');
  historyArray.pop();
  const newElement = createNewHistoryElement(valuesArray);
  updateResourceHistory([...historyArray, newElement]);
};
//get setstate function from values array by name
const getRelatedSetter = (setterName, currentValuesArray) => {
  for (let i = 0; i < currentValuesArray.length; i++) {
    if (currentValuesArray[i].name === setterName) {
      return currentValuesArray[i].setter;
    }
  }
};

export {
  getResourceHistory,
  updateResourceHistory,
  createNewHistoryElement,
  setValuesFromLastHistoryElement,
  mutateLastHistoryElement,
  getRelatedSetter,
};
