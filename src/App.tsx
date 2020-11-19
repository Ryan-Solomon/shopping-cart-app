import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/products'>
          <ProductsPage />
        </Route>
        <Route exact path='/cart'>
          <CartPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
