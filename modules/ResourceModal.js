// import styles from './styles.js';
import { StyleSheet, Modal, Pressable, Text, View } from 'react-native';
import React from 'react';
import ResourceExpanded from './ResourceExpanded';

const ResourceModal = ({ opened, setOpened, name, title, value, setter }) => {
  return (
    <>
      <Pressable style={styles.btnMore} onPress={() => setOpened(!opened)}>
        <Text style={styles.btnMoreTxt}>expand</Text>
      </Pressable>
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
          <Pressable style={styles.close} onPress={() => setOpened(!opened)}>
            <Text style={styles.closeContent}>×</Text>
          </Pressable>
          <ResourceExpanded
            name={name}
            title={title}
            value={value}
            setter={setter}
          />
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
    backgroundColor: '#333533',
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
    color: '#000',
    fontSize: 20,
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 30,
    zIndex: 20,
  },
  closeContent: {
    color: '#fff',
    fontSize: 50,
  },
  btnMore: {
    width: '100%',
    marginTop: 5,
  },
  btnMoreTxt: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
  },
});

export default ResourceModal;
