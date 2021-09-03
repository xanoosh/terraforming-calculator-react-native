import { terraformingPointsStyles } from '../style/styles.js';
import { Text, Pressable, View } from 'react-native';
import React from 'react';

const TerraformingPoints = ({ name, value, setter, valuesArray }) => {
  return (
    <View style={terraformingPointsStyles.cell}>
      <View style={terraformingPointsStyles.row}>
        <Text style={terraformingPointsStyles.name}>Points</Text>
      </View>
      <View style={terraformingPointsStyles.row}>
        <Pressable
          style={terraformingPointsStyles.button}
          onPress={() => setter(name, -1, valuesArray)}
        >
          <Text style={terraformingPointsStyles.buttonText}>-1</Text>
        </Pressable>
        <Text style={terraformingPointsStyles.value}>{value}</Text>

        <Pressable
          style={terraformingPointsStyles.button}
          onPress={() => setter(name, 1, valuesArray)}
        >
          <Text style={terraformingPointsStyles.buttonText}>1</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TerraformingPoints;
