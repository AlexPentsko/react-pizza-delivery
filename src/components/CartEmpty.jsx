import React from 'react';

const CartEmpty = () => {
  return (
    <div class="cart cart--empty">
      <h2>
        Cart is empty <icon>😕</icon>
      </h2>
      <p>
        You haven't order pizza yet.
        <br />
        To order pizza, click on "Add" button on Main page.
      </p>
      <img src="/img/empty-cart.png" alt="Empty cart" />
      <a href="/" class="button button--black">
        <span>Go Back</span>
      </a>
    </div>
  );
};

export default CartEmpty;
