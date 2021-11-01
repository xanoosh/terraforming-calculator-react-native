import { StyleSheet } from 'react-native';

export default terraformingPointsStyles = StyleSheet.create({
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
    fontSize: 15,
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
