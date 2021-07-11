// import styles from './styles.js';
import { StyleSheet, Text, Button, View } from 'react-native';
import React from 'react';

const TerraformingPoints = ({ name, value, setter }) => {
  return (
    <View style={styles.cell}>
      <View style={styles.row}>
        <Text style={styles.name}>Points</Text>
      </View>
      <View style={styles.row}>
        <Button
          style={styles.button}
          onPress={() => setter(name, -1)}
          title="-"
        />
        <Text style={styles.value}>{value}</Text>
        <Button
          style={styles.button}
          onPress={() => setter(name, 1)}
          title="+"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    paddingBottom: 5,
  },
  value: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    minWidth: '40%',
    textAlign: 'center',
  },
});

export default TerraformingPoints;
