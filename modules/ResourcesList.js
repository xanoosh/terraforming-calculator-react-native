import React from 'react';
import Resource from './Resource';
import { Text, View } from 'react-native';
import { resourcesListStyles } from '../style/styles.js';

const ResourceList = ({ valuesArray, handleResourceChange }) => {
  const resourceArr = [...valuesArray].slice(0, -1);
  const resourcesComponents = resourceArr.map((el, i) => {
    if (i % 2 === 0) {
      return (
        <Resource
          key={i}
          name={el.name}
          productionName={valuesArray[i + 1].name}
          value={el.value}
          production={valuesArray[i + 1].value}
          setter={handleResourceChange}
          valuesArray={valuesArray}
          image={el?.img}
        />
      );
    }
  });
  return (
    <>
      <View style={resourcesListStyles.descriptiton}>
        <Text style={resourcesListStyles.descriptitonTxt}>Quantity</Text>
        <Text style={resourcesListStyles.descriptitonTxt}>Name</Text>
        <Text style={resourcesListStyles.descriptitonTxt}>Production</Text>
      </View>
      {resourcesComponents}
    </>
  );
};

export default ResourceList;
