// import styles from './styles.js';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import SingleResourceCell from './SingleResourceCell';

const Resource = ({ name, value, production, productionName, setter }) => {
  return (
    <>
      <View style={styles.resource}>
        <View style={styles.col}>
          <SingleResourceCell name={name} value={value} setter={setter} />
        </View>
        <View style={styles.col}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.col}>
          <View style={styles.col}>
            <SingleResourceCell
              name={productionName}
              value={production}
              setter={setter}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  resource: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    color: '#fff',
    marginTop: 5,
  },
  col: {
    width: '33%',
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
});

export default Resource;
