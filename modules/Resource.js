import styles from '../style/styles.js';
import { Text, View } from 'react-native';
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

export default Resource;
