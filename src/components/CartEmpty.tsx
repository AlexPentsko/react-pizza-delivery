import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Cart is empty <span>😕</span>
    </h2>
    <p>
      You haven't order pizza yet.
      <br />
      To order pizza, click on "Add" button on Main page.
    </p>
    <img src="/img/empty-cart.png" alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Go Back</span>
    </Link>
  </div>
);

export default CartEmpty;
