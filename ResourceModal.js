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
        animationType="fade"
        presentationStyle="overFullScreen"
        transparent={true}
        visible={opened}
        onRequestClose={() => {
          setOpened(!opened);
        }}
      >
        <View style={styles.centeredView}>
          <View>
            <Pressable style={styles.close} onPress={() => setOpened(!opened)}>
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
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    position: 'relative',
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
  close: {
    position: 'absolute',
    top: '10%',
    right: '10%',
  },
});

export default ResourceModal;
