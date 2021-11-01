import { StyleSheet } from 'react-native';

export default mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#434549',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    padding: 10,
  },
  viewTop: {
    position: 'absolute',
    top: '4%',
    width: '100%',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resetBtn: {
    height: '50%',
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetBtnTxt: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    width: 50,
  },
});
