import React from 'react';

import Resource from './Resource';

const ResourceList = ({ valuesArray, handleResourceChange }) => {
  const resourceArr = [...valuesArray].slice(0, -1);
  const list = resourceArr.map((el, i) => {
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
        />
      );
    }
  });
  return <>{list}</>;
};

export default ResourceList;
