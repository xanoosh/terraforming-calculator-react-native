// import styles from './styles.js';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import React from 'react';

const ResourceExpanded = ({ name, title, value, setter }) => {
  return (
    <View style={styles.resource}>
      <Text style={styles.name}>{title}</Text>
      <View style={styles.btnGroup}>
        <Pressable style={styles.btn} onPress={() => setter(name, -10)}>
          <Text style={styles.btnTxt}>-10</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => setter(name, -5)}>
          <Text style={styles.btnTxt}>-5</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => setter(name, -1)}>
          <Text style={styles.btnTxt}>-1</Text>
        </Pressable>
      </View>
      <Text style={styles.value}>{value}</Text>
      <View style={styles.btnGroup}>
        <Pressable style={styles.btn} onPress={() => setter(name, 1)}>
          <Text style={styles.btnTxt}>+1</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => setter(name, 5)}>
          <Text style={styles.btnTxt}>+5</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => setter(name, 10)}>
          <Text style={styles.btnTxt}>+10</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333533',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resource: {
    display: 'flex',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '90%',
    marginTop: 20,
    padding: 10,
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  name: {
    color: '#fff',
    fontSize: 30,
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    zIndex: 10,
    top: '-2%',
  },
  value: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    padding: 20,
  },
  btn: {
    padding: 10,
    width: '30%',
    backgroundColor: '#4695ec',
  },
  btnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default ResourceExpanded;
