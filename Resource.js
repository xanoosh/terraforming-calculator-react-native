// import styles from './styles.js';
import { StyleSheet, Modal, Text, Button, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import ResourceModal from './ResourceModal';

const Resource = ({ name, value, setValue }) => {
  const [opened, setOpened] = useState(false);
  return (
    <View style={styles.resource}>
      <Button
        style={styles.button}
        onPress={() => setValue(name, +1)}
        title="+"
      />
      <Text style={styles.value}>{value}</Text>
      <Button
        style={styles.button}
        onPress={() => setValue(name, -1)}
        title="-"
      />
      <Text style={styles.name}>{name}</Text>
      <ResourceModal
        opened={opened}
        setOpened={setOpened}
        name={name}
        value={value}
        setValue={setValue}
      />
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

export default Resource;
