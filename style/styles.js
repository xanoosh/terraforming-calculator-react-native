import { StyleSheet } from 'react-native';

//main
const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#333533',
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
  advanceBtn: {
    width: '50%',
    position: 'absolute',
    bottom: '5%',
    // backgroundColor: '#4695ec',
    backgroundColor: '#447CEE',
    padding: 9,
  },
  advanceBtnTxt: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    // fontWeight: 'bold',
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
});

//resource list component:
const resourcesListStyles = StyleSheet.create({
  descriptiton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  descriptitonTxt: {
    color: '#fff',
    width: '33.333%',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 13,
  },
});

//resource component
const resourceStyles = StyleSheet.create({
  resource: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
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
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: -10,
  },
  image: {
    width: 50,
    height: 50,
  },
});

//resource expanded component
const resourceExpandedStyles = StyleSheet.create({
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

//resource modal component
const resourceModalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#333533',
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

//single resource cell component
const singleResourceCellStyles = StyleSheet.create({
  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    minWidth: '40%',
    textAlign: 'center',
  },
  button: {
    width: 30,
    height: 30,
    // backgroundColor: '#4695ec',
    backgroundColor: '#447CEE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const terraformingPointsStyles = StyleSheet.create({
  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33.33%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    paddingBottom: 5,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 13,
  },
  value: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    minWidth: '40%',
    textAlign: 'center',
  },
  button: {
    width: 30,
    height: 30,
    // backgroundColor: '#4695ec',
    backgroundColor: '#447CEE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export {
  mainStyles,
  resourcesListStyles,
  resourceStyles,
  resourceExpandedStyles,
  resourceModalStyles,
  singleResourceCellStyles,
  terraformingPointsStyles,
};
