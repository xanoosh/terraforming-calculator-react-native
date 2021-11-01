import { StyleSheet } from 'react-native';

export default resourceModalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#434549',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  value: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    minWidth: '15%',
    textAlign: 'center',
  },
  name: {
    color: '#000',
    fontSize: 20,
  },
  close: {
    position: 'absolute',
    bottom: 20,
    right: '45%',
    zIndex: 20,
  },
  closeContent: {
    color: '#fff',
    fontSize: 50,
  },
  btnMore: {
    width: '100%',
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
  },
  btnMoreTxt: {
    width: 60,
    color: '#fff',
    fontSize: 12,
    padding: 3,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fff',
    lineHeight: 15,
    textAlign: 'center',
  },
});
