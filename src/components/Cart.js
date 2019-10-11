import React from 'react'
import CartItem from './CartItem'
import Datagetter9000 from './Datagetter9000'
import '../App.css'


function Cart(props) {

    return (
      <section className="main__summary">
        <h2>Your cart</h2>

         { Object.keys(props.selected).map((feature, idx) => {
        
          const featureHash = feature + '-' + idx;
          const selectedOption = props.selected[feature];

          return ( 
          <CartItem 
          featureHash={featureHash} 
          selectedOption={selectedOption} 
          feature={feature} key={idx}/>
          )
        })
        }
    
        <Datagetter9000 selected={props.selected} />
      </section>
    )
}


export default Cart;

