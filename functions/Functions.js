import AsyncStorage from '@react-native-async-storage/async-storage';

//get AsyncStorage data or return false
const getData = async (name) => {
  try {
    const value = await AsyncStorage.getItem(name);
    if (value !== null) return value;
    else return false;
  } catch (e) {
    return false;
  }
};

//save resource changes in asyncstorage
const saveResource = (name, val) => {
  (async () => {
    await AsyncStorage.setItem(name, val + '');
  })();
};

export { getData, saveResource };
