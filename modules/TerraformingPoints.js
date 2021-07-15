import { terraformingPointsStyles } from '../style/styles.js';
import { Text, Button, View } from 'react-native';
import React from 'react';

const TerraformingPoints = ({ name, value, setter }) => {
  return (
    <View style={terraformingPointsStyles.cell}>
      <View style={terraformingPointsStyles.row}>
        <Text style={terraformingPointsStyles.name}>Points</Text>
      </View>
      <View style={terraformingPointsStyles.row}>
        <Button
          style={terraformingPointsStyles.button}
          onPress={() => setter(name, -1)}
          title="-"
        />
        <Text style={terraformingPointsStyles.value}>{value}</Text>
        <Button
          style={terraformingPointsStyles.button}
          onPress={() => setter(name, 1)}
          title="+"
        />
      </View>
    </View>
  );
};

export default TerraformingPoints;
