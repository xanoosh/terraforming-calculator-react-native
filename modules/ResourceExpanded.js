import styles from '../style/styles.js';
import { Text, Pressable, View } from 'react-native';
import React from 'react';

const ResourceExpanded = ({ name, title, value, setter }) => {
  return (
    <View style={styles.resourceExpanded}>
      <Text style={styles.titleExpanded}>{title}</Text>
      <View style={styles.btnGroupExpanded}>
        <Pressable style={styles.btnExpanded} onPress={() => setter(name, -10)}>
          <Text style={styles.btnTxtExpanded}>-10</Text>
        </Pressable>
        <Pressable style={styles.btnExpanded} onPress={() => setter(name, -5)}>
          <Text style={styles.btnTxtExpanded}>-5</Text>
        </Pressable>
        <Pressable style={styles.btnExpanded} onPress={() => setter(name, -1)}>
          <Text style={styles.btnTxtExpanded}>-1</Text>
        </Pressable>
      </View>
      <Text style={styles.valueExpanded}>{value}</Text>
      <View style={styles.btnGroupExpanded}>
        <Pressable style={styles.btnExpanded} onPress={() => setter(name, 1)}>
          <Text style={styles.btnTxtExpanded}>+1</Text>
        </Pressable>
        <Pressable style={styles.btnExpanded} onPress={() => setter(name, 5)}>
          <Text style={styles.btnTxtExpanded}>+5</Text>
        </Pressable>
        <Pressable style={styles.btnExpanded} onPress={() => setter(name, 10)}>
          <Text style={styles.btnTxtExpanded}>+10</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ResourceExpanded;
