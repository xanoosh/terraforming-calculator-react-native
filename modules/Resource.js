import { resourceStyles } from '../style/styles.js';
import { Text, View, Image } from 'react-native';
import React from 'react';

import SingleResourceCell from './SingleResourceCell';

const Resource = ({
  name,
  value,
  production,
  productionName,
  setter,
  valuesArray,
  image,
}) => {
  return (
    <>
      <View style={resourceStyles.resource}>
        <View style={resourceStyles.col}>
          <SingleResourceCell
            name={name}
            value={value}
            setter={setter}
            valuesArray={valuesArray}
          />
        </View>
        <View style={resourceStyles.col}>
          {image ? (
            <View style={resourceStyles.imgContainer}>
              <Image source={image} width={50} height={50} />
            </View>
          ) : (
            <Text style={resourceStyles.name}>{name}</Text>
          )}
        </View>
        <View style={resourceStyles.col}>
          <View style={resourceStyles.col}>
            <SingleResourceCell
              name={productionName}
              value={production}
              setter={setter}
              valuesArray={valuesArray}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Resource;
