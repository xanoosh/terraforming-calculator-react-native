// import styles from './styles.js';
import { StyleSheet, Modal, Text, Button, View } from 'react-native';
import React, { useState, useEffect } from 'react';

// import ResourceModal from './ResourceModal';

const ResourceExpanded = ({ name, value, setValue }) => {
  return (
    <View style={styles.resource}>
      <Button
        style={styles.button}
        onPress={() => setValue((prev) => prev - 10)}
        title="-10"
      />
      <Button
        style={styles.button}
        onPress={() => setValue((prev) => prev - 5)}
        title="-5"
      />

      <Button
        style={styles.button}
        onPress={() => setValue((prev) => prev - 1)}
        title="-1"
      />
      <Text style={styles.value}>{value}</Text>
      <Button
        style={styles.button}
        onPress={() => setValue((prev) => prev + 1)}
        title="+1"
      />
      <Button
        style={styles.button}
        onPress={() => setValue((prev) => prev + 5)}
        title="+5"
      />
      <Button
        style={styles.button}
        onPress={() => setValue((prev) => prev + 10)}
        title="+10"
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

export default ResourceExpanded;
