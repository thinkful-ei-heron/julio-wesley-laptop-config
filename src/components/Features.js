import React, { Component } from 'react'
import Options from './Options'


export default class Features extends Component {
features = Object.keys(this.props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
            return(
                    <fieldset className="feature" key={featureHash}>
                        <legend className="feature__name">
                        <h3>{feature}</h3> 
                        </legend>
                        <Options Store={this.props.features[feature]}  />
                    </fieldset>
            );
            
});
    render() {
        return(
            this.features
        );
    }
}



    // const features = Object.keys(this.props.features).map((feature, idx) => {
    // const featureHash = feature + '-' + idx;

    //   return (
    //     <fieldset className="feature" key={featureHash}>
    //       <legend className="feature__name">
    //       <h3>{feature}</h3> 
    //       </legend>
    //       <Options  />
    //       </fieldset>
      
    //   );
    // });

//ES7 React/Redux/GraphQL/React-Native snippets


//           App
// Features  -- Cart
// Options