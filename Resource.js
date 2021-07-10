// import styles from './styles.js';
import { StyleSheet, Text, Button, View } from 'react-native';
import React, { useState, useEffect } from 'react';

const Resource = ({ name, value, setValue }) => {
  return (
    <View style={styles.resource}>
      <Button
        style={styles.button}
        onPress={() => setValue((prev) => prev + 1)}
        title="+"
      />
      <Text style={styles.value}>{value}</Text>
      <Button
        style={styles.button}
        onPress={() => setValue((prev) => prev - 1)}
        title="-"
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resource: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-round',
    backgroundColor: '#333533',
    width: '90%',
    color: '#fff',
    marginTop: 20,
    padding: 10,
  },
  value: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    minWidth: '15%',
    textAlign: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    // backgroundColor: '#fff',
    marginTop: 20,
    padding: 10,
  },
});

export default Resource;
