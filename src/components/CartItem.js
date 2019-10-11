import React from 'react';
import {USCurrencyFormat} from '../App';
import '../App.css'


function CartItem(props) {
  return (
    <div className="summary__option" key={props.featureHash}>
      <div className="summary__option__label">{props.feature} </div>
      <div className="summary__option__value">{props.selectedOption.name}</div>
      <div className="summary__option__cost">
        {USCurrencyFormat.format(props.selectedOption.cost)}
      </div>
    </div>
  );
}

export default CartItem;