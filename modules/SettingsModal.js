import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import React from 'react';

// create 2 number fields

const SettingsModal = ({ opened, setOpened, keepAwake }) => {
  return (
    <>
      <Pressable
        style={settingsModalStyles.btnMore}
        onPress={() => setOpened(!opened)}
      >
        <Text style={settingsModalStyles.btnMoreTxt}>expand</Text>
      </Pressable>
      <Modal
        animationType="slide"
        presentationStyle="overFullScreen"
        transparent={true}
        visible={opened}
        onRequestClose={() => {
          setOpened(!opened);
        }}
      >
        <View style={settingsModalStyles.centeredView}>
          <Pressable
            style={settingsModalStyles.close}
            onPress={() => setOpened(!opened)}
          >
            <Text style={resourceModalStyles.closeContent}>×</Text>
          </Pressable>
          {/* settings content here */}
          <Pressable
            style={settingsModalStyles.awakeBtn}
            onPress={() => {
              keepAwake ? deactivateKeepAwake() : activateKeepAwake();
            }}
          >
            <Text style={resourceModalStyles.awakeBtnTxt}>
              {keepAwake ? 'Turn Off' : 'Turn On'}
            </Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
};

export default SettingsModal;
