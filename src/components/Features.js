import React from 'react';
import Options from './Options';
import slugify from 'slugify';


function Features(props) {
  return (
  Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
   
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>

          {props.features[feature].map((item, id) => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <Options 
            selected={props.selected} 
            updateFeature={props.updateFeature} 
            feature={feature} 
            item={item} 
            itemHash={itemHash} 
            key={id}
            />
          )})}
          </fieldset>
      );
    })
  )}


  

export default Features;