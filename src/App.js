import React, { Component } from 'react';
import StorePicker from './components/StorePicker';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
