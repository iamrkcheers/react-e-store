import React, { Component } from 'react';
import Title from '../Title.js';
import CartColumns from './CartColumns.js';
import EmptyCart from './EmptyCart.js';
import { ProductConsumer } from '../../context.js';
import CartList from './CartList.js';
import CartTotals from './CartTotals.js';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name='Your' title='Cart' />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            }
            else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    )
  }
}