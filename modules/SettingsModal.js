import React from 'react';
import {
  Modal,
  Pressable,
  Text,
  View,
  Image,
  Switch,
  Alert,
} from 'react-native';
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
  const handleAlert = () => {
    Alert.alert('Reset', 'Reset all data?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          resetHandler();
          setOpened(!opened);
        },
      },
    ]);
  };

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
            <Text style={settingsModalStyles.btnHeading}>Reset all data</Text>
            <Pressable
              style={settingsModalStyles.btn}
              onPress={() => handleAlert()}
            >
              <Text style={settingsModalStyles.btnTxt}>Reset</Text>
            </Pressable>
          </View>
          <View style={settingsModalStyles.settingsView}>
            <Text style={settingsModalStyles.btnHeading}>Screen always on</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              // style={({ scaleX: 100 }, { scaleY: 0.8 })}
              onValueChange={() => {
                keepAwake ? deactivateKeepAwake() : activateKeepAwake();
                setKeepAwake(!keepAwake);
              }}
              value={keepAwake}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SettingsModal;
