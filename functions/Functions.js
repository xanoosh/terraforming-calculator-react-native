// import AsyncStorage from '@react-native-async-storage/async-storage';

//get AsyncStorage data or return false
// const getData = async (name) => {
//   try {
//     const value = await AsyncStorage.getItem(name);
//     if (value !== null) return value;
//     else return false;
//   } catch (e) {
//     return false;
//   }
// };

//save resource changes in asyncstorage
// const saveResource = (name, val) => {
//   (async () => {
//     await AsyncStorage.setItem(name, val + '');
//   })();
// };

//reset resoucers data:
// const handleReset = (currentValuesArray) => {
//   currentValuesArray.forEach((value) => {
//     if (value.name === 'TR') {
//       saveResource(value.name, 20);
//       value.setter(20);
//     } else {
//       saveResource(value.name, 0);
//       value.setter(0);
//     }
//   });
// };

//change specific item value:
// const handleResourceChange = (name, val, currentValuesArray) => {
//   for (let i = 0; i < currentValuesArray.length; i++) {
//     if (currentValuesArray[i].name === name) {
//       valuesArray[i].setter((prev) => prev + val);
//     }
//   }
// };

// export { saveResource, handleReset, handleResourceChange };
