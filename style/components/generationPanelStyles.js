import { StyleSheet } from 'react-native';

export default generationPanelStyles = StyleSheet.create({
  advanceBtn: {
    width: '50%',
    position: 'absolute',
    bottom: '5%',
    backgroundColor: '#447CEE',
    padding: 9,
  },
  advanceBtnTxt: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  backBtn: {
    position: 'absolute',
    bottom: '6.5%',
    left: '5%',
    width: '20%',
  },
  backBtnTxt: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
  },
  generationContainer: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    width: '20%',
  },
  generationTxt: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    fontSize: 10,
  },
  generationVal: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 1,
  },
});
