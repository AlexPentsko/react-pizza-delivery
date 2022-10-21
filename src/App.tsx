import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const FullPizza = lazy(() => import(/* webpackChunkName: "PizzaCard" */ './pages/FullPizza'));
const NotFound = lazy(() => import(/* webpackChunkName: "Error: 404" */ './pages/NotFound'));

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<FullPizza />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
