import { resourceStyles } from '../style/styles.js';
import { Text, View } from 'react-native';
import React from 'react';

import SingleResourceCell from './SingleResourceCell';

const Resource = ({ name, value, production, productionName, setter }) => {
  return (
    <>
      <View style={resourceStyles.resource}>
        <View style={resourceStyles.col}>
          <SingleResourceCell name={name} value={value} setter={setter} />
        </View>
        <View style={resourceStyles.col}>
          <Text style={resourceStyles.name}>{name}</Text>
        </View>
        <View style={resourceStyles.col}>
          <View style={resourceStyles.col}>
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
