import { resourceModalStyles } from '../style/styles.js';
import { Modal, Pressable, Text, View } from 'react-native';
import React from 'react';
import ResourceExpanded from './ResourceExpanded';

const ResourceModal = ({ opened, setOpened, name, title, value, setter }) => {
  return (
    <>
      <Pressable
        style={resourceModalStyles.btnMore}
        onPress={() => setOpened(!opened)}
      >
        <Text style={resourceModalStyles.btnMoreTxt}>expand</Text>
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
        <View style={resourceModalStyles.centeredView}>
          <Pressable
            style={resourceModalStyles.close}
            onPress={() => setOpened(!opened)}
          >
            <Text style={resourceModalStyles.closeContent}>×</Text>
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

export default ResourceModal;