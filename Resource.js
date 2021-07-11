// import styles from './styles.js';
import { StyleSheet, Text, Button, View } from 'react-native';
import React, { useState } from 'react';

import ResourceModal from './ResourceModal';
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
    width: '95%',
    padding: 10,
    color: '#fff',
    marginTop: 15,
  },
  expand: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  col: {
    width: '30%',
    flex: 1,
    flexDirection: 'row',
  },
  name: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
  },
});

export default Resource;
