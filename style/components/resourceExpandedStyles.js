import { StyleSheet } from 'react-native';

export default resourceExpandedStyles = StyleSheet.create({
  resourceExpanded: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '90%',
    marginTop: 20,
    padding: 10,
  },
  titleExpanded: {
    color: '#fff',
    fontSize: 30,
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    zIndex: 10,
    top: '-2%',
  },
  valueExpanded: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    padding: 20,
  },
  btnGroupExpanded: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  btnExpanded: {
    padding: 10,
    width: '30%',
    // backgroundColor: '#4695ec',
    backgroundColor: '#447CEE',
  },
  btnTxtExpanded: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});
