// import styles from './styles.js';
import { StyleSheet, Text, Button, View } from 'react-native';
import React, { useState } from 'react';

import ResourceModal from './ResourceModal';

const SingleResourceCell = ({ name, value, setter }) => {
  const [opened, setOpened] = useState(false);

  return (
    <View style={styles.cell}>
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
      <View style={styles.row}>
        <ResourceModal
          opened={opened}
          setOpened={setOpened}
          name={name}
          value={value}
          setter={setter}
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
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    textAlign: 'center',
  },
  value: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    minWidth: '15%',
    textAlign: 'center',
  },
});

export default SingleResourceCell;
