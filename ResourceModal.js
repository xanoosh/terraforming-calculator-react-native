// import styles from './styles.js';
import { StyleSheet, Modal, Pressable, Text, Button, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import ResourceExpanded from './ResourceExpanded';

const ResourceModal = ({ opened, setOpened, name, value, setValue }) => {
  return (
    <>
      <Button
        style={styles.button}
        onPress={() => setOpened(!opened)}
        title="more"
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={opened}
        onRequestClose={() => {
          setOpened(!opened);
        }}
      >
        <View style={styles.centeredView}>
          <View>
            <Pressable style={styles.button} onPress={() => setOpened(!opened)}>
              <Text style={styles.textStyle}>hide</Text>
            </Pressable>
            <ResourceExpanded name={name} value={value} setValue={setValue} />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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

export default ResourceModal;
