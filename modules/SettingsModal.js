import React from 'react';
import { Modal, Pressable, Text, View, Image } from 'react-native';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import settingsImg from '../assets/settings-wheel.png';
import { settingsModalStyles, resourceModalStyles } from '../style/styles.js';

const SettingsModal = ({
  opened,
  setOpened,
  keepAwake,
  setKeepAwake,
  resetHandler,
}) => {
  return (
    <>
      <Pressable
        style={settingsModalStyles.btnSettings}
        onPress={() => setOpened(!opened)}
      >
        <Image style={settingsModalStyles.img} source={settingsImg} />
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
        <View style={resourceModalStyles.centeredView}>
          <Pressable
            style={resourceModalStyles.close}
            onPress={() => setOpened(!opened)}
          >
            <Text style={resourceModalStyles.closeContent}>×</Text>
          </Pressable>
          {/* settings content here */}

          <View style={settingsModalStyles.settingsView}>
            <Text>Screen always on</Text>
            <Pressable
              style={settingsModalStyles.btn}
              onPress={() => {
                resetHandler();
                setOpened(!opened);
              }}
            >
              <Text style={settingsModalStyles.btnTxt}>reset</Text>
            </Pressable>
          </View>
          <View style={settingsModalStyles.settingsView}>
            <Text>Screen always on</Text>
            <Pressable
              style={settingsModalStyles.btn}
              onPress={() => {
                keepAwake ? deactivateKeepAwake() : activateKeepAwake();
                setKeepAwake(!keepAwake);
              }}
            >
              <Text style={settingsModalStyles.btnTxt}>
                {keepAwake ? 'Turn Off' : 'Turn On'}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SettingsModal;
