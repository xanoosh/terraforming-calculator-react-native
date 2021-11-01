import { StyleSheet } from 'react-native';

export default resourceStyles = StyleSheet.create({
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
