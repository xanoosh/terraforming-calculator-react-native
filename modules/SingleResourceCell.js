import { singleResourceCellStyles } from '../style/styles.js';
import { Text, Button, View } from 'react-native';
import React, { useState } from 'react';

import ResourceModal from './ResourceModal';

const SingleResourceCell = ({ name, value, setter }) => {
  const [opened, setOpened] = useState(false);
  const setTitle = () => {
    if (name.includes('Prod')) return `${name.slice(0, -4)} \nProduction`;
    return name;
  };
  return (
    <View style={singleResourceCellStyles.cell}>
      <View style={singleResourceCellStyles.row}>
        <Button
          style={singleResourceCellStyles.button}
          onPress={() => setter(name, -1)}
          title="-"
        />
        <Text style={singleResourceCellStyles.value}>{value}</Text>
        <Button
          style={singleResourceCellStyles.button}
          onPress={() => setter(name, 1)}
          title="+"
        />
      </View>
      <View style={singleResourceCellStyles.row}>
        <ResourceModal
          opened={opened}
          setOpened={setOpened}
          name={name}
          title={setTitle()}
          value={value}
          setter={setter}
        />
      </View>
    </View>
  );
};

export default SingleResourceCell;
