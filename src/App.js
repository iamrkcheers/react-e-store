import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Details from './components/Details.js';
import Cart from './components/Cart';
import Default from './components/Default.js';
import Modal from './components/Modal.js';

class App extends Component {
  render() {
    return (
      // <div className='container'>
      //   <div className='row'>
      //     <div className='col-6'>Rishabh</div>
      //     <div className='col-6'>
      //       <span>
      //         <i className='fas fa-home' />
      //       </span>
      //     </div>
      //   </div>
      // </div>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/details' component={Details} />
          <Route exact path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
