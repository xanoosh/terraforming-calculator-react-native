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
              onPress={() => {
                resetHandler();
                setOpened(!opened);
              }}
            >
              <Text style={settingsModalStyles.btnTxt}>Reset</Text>
            </Pressable>
          </View>
          <View style={settingsModalStyles.settingsView}>
            <Text style={settingsModalStyles.btnHeading}>Screen always on</Text>
            <Switch
              // trackColor={{ false: '#767577', true: '#81b0ff' }}
              // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
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
