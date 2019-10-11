import React, { Component } from 'react'
import slugify from 'slugify'
import App from '../App'


export default class Options extends Component {

    options = this.props.Store.map(item => {
    const itemHash = slugify(JSON.stringify(item));
        console.log(this);
        return (
            <div key={itemHash} className="feature__item">
            <input
                type="radio"
                id={itemHash}
                className="feature__option"       
                name={'ur mom'}          
                //checked={item.name === this.state.selected.name}
                //onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
                {item.name} ({App.USCurrencyFormat.format(item.cost)})
            </label>
            </div>
        );
    });
    
    
    render() {
        return (
            this.options
        )
    }
    
}

    // options = this.props.features[feature].map(item => {
    // const itemHash = slugify(JSON.stringify(item));
    //     console.log(itemHash);
    //     return (
    //       <div key={itemHash} className="feature__item">
    //         <input
    //           type="radio"
    //           id={itemHash}
    //           className="feature__option"       
    //           name={slugify(feature)}          
    //           checked={item.name === this.state.selected[feature].name}
    //           onChange={e => this.updateFeature(feature, item)}
    //         />
    //         <label htmlFor={itemHash} className="feature__label">
    //           {item.name} ({USCurrencyFormat.format(item.cost)})
    //         </label>
    //       </div>
    //     );
    // });
