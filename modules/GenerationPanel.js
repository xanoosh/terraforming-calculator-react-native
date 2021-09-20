import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { generationPanelStyles } from '../style/styles.js';

const GenerationPanel = ({
  handleGoBack,
  handleAdvanceGeneration,
  genNumber,
}) => {
  return (
    <>
      <Pressable
        style={generationPanelStyles.backBtn}
        onPress={() => handleGoBack()}
      >
        <Text style={generationPanelStyles.backBtnTxt}>Back</Text>
      </Pressable>
      <Pressable
        style={generationPanelStyles.advanceBtn}
        onPress={() => handleAdvanceGeneration()}
      >
        <Text style={generationPanelStyles.advanceBtnTxt}>
          Advance Generation
        </Text>
      </Pressable>
      <View style={generationPanelStyles.generationContainer}>
        <Text style={generationPanelStyles.generationTxt}>Generation</Text>
        <Text style={generationPanelStyles.generationVal}>{genNumber}</Text>
      </View>
    </>
  );
};

export default GenerationPanel;
