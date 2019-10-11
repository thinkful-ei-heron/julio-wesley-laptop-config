import React from 'react';
import Features from './Features';
import '../index.css'

function Create(props) {

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <Features 
      selected={props.selected} 
      updateFeature={props.updateFeature} 
      features={props.features}
      />
    </form>
  )

}

export default Create;