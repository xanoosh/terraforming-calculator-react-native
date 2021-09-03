import { resourceExpandedStyles } from '../style/styles.js';
import { Text, Pressable, View } from 'react-native';
import React from 'react';

const ResourceExpanded = ({ name, title, value, setter, valuesArray }) => {
  return (
    <View style={resourceExpandedStyles.resourceExpanded}>
      <Text style={resourceExpandedStyles.titleExpanded}>{title}</Text>
      <View style={resourceExpandedStyles.btnGroupExpanded}>
        <Pressable
          style={resourceExpandedStyles.btnExpanded}
          onPress={() => setter(name, -1, valuesArray)}
        >
          <Text style={resourceExpandedStyles.btnTxtExpanded}>-1</Text>
        </Pressable>
        <Pressable
          style={resourceExpandedStyles.btnExpanded}
          onPress={() => setter(name, -5, valuesArray)}
        >
          <Text style={resourceExpandedStyles.btnTxtExpanded}>-5</Text>
        </Pressable>
        <Pressable
          style={resourceExpandedStyles.btnExpanded}
          onPress={() => setter(name, -10, valuesArray)}
        >
          <Text style={resourceExpandedStyles.btnTxtExpanded}>-10</Text>
        </Pressable>
      </View>
      <Text style={resourceExpandedStyles.valueExpanded}>{value}</Text>
      <View style={resourceExpandedStyles.btnGroupExpanded}>
        <Pressable
          style={resourceExpandedStyles.btnExpanded}
          onPress={() => setter(name, 1, valuesArray)}
        >
          <Text style={resourceExpandedStyles.btnTxtExpanded}>+1</Text>
        </Pressable>
        <Pressable
          style={resourceExpandedStyles.btnExpanded}
          onPress={() => setter(name, 5, valuesArray)}
        >
          <Text style={resourceExpandedStyles.btnTxtExpanded}>+5</Text>
        </Pressable>
        <Pressable
          style={resourceExpandedStyles.btnExpanded}
          onPress={() => setter(name, 10, valuesArray)}
        >
          <Text style={resourceExpandedStyles.btnTxtExpanded}>+10</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ResourceExpanded;
