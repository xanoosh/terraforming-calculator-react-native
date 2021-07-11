// import styles from './styles.js';
import { StyleSheet, Text, Button, View } from 'react-native';
import React, { useState } from 'react';

import ResourceModal from './ResourceModal';

const Resource = ({ name, value, production, setter }) => {
  const [opened, setOpened] = useState(false);
  return (
    <View style={styles.resource}>
      <View style={styles.col}>
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

      <View style={styles.col}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.col}>
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
  resource: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    color: '#fff',
    marginTop: 20,
    padding: 10,
  },
  col: {
    width: '30%',
    flex: 1,
    flexDirection: 'row',
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
    textAlign: 'center',
    width: '100%',
  },
  button: {
    // backgroundColor: '#fff',
    marginTop: 20,
    padding: 10,
  },
});

export default Resource;
