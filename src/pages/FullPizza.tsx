import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://6331945fcff0e7bf70f14f31.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        console.log(error);
        alert('Error to get pizza');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>${pizza.price}</h4>
      <Link to={'/'}>
        <button className="button button--outline button--add">
          <span>Go Back</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
