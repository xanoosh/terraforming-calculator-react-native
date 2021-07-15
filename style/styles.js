import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333533',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    padding: 10,
  },
  viewTop: {
    position: 'absolute',
    top: '5%',
    width: '100%',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetBtn: {
    height: '100%',
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  resetBtnTxt: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
  },
  advanceBtn: {
    width: '50%',
    position: 'absolute',
    bottom: '10%',
    backgroundColor: '#4695ec',
    padding: 9,
  },
  advanceBtnTxt: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  descriptiton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 35,
  },
  descriptitonTxt: {
    color: '#fff',
    width: '33.333%',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 13,
  },
  //resource component
  resource: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    // padding: 10,
    color: '#fff',
    marginBottom: 15,
  },
  col: {
    width: '33.33333333%',
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
  },
  //resource expanded component
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
    backgroundColor: '#4695ec',
  },
  btnTxtExpanded: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  //resource modal component
});

export default styles;
