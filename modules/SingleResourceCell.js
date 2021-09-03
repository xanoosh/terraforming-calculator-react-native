import { singleResourceCellStyles } from '../style/styles.js';
import { Text, Pressable, View } from 'react-native';
import React, { useState } from 'react';

import ResourceModal from './ResourceModal';

const SingleResourceCell = ({ name, value, setter, valuesArray }) => {
  const [opened, setOpened] = useState(false);
  const setTitle = () => {
    if (name.includes('Prod')) return `${name.slice(0, -4)} \nProduction`;
    return name;
  };
  return (
    <View style={singleResourceCellStyles.cell}>
      <View style={singleResourceCellStyles.row}>
        <Pressable
          style={singleResourceCellStyles.button}
          onPress={() => setter(name, -1, valuesArray)}
        >
          <Text style={singleResourceCellStyles.buttonText}>-1</Text>
        </Pressable>

        <Text style={singleResourceCellStyles.value}>{value}</Text>

        <Pressable
          style={singleResourceCellStyles.button}
          onPress={() => setter(name, 1, valuesArray)}
        >
          <Text style={singleResourceCellStyles.buttonText}>1</Text>
        </Pressable>
      </View>
      <View style={singleResourceCellStyles.row}>
        <ResourceModal
          opened={opened}
          setOpened={setOpened}
          name={name}
          title={setTitle()}
          value={value}
          setter={setter}
          valuesArray={valuesArray}
        />
      </View>
    </View>
  );
};

export default SingleResourceCell;
