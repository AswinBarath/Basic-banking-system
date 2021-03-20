import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Customers from './components/Customers/Customers';
import ViewButton from './components/ViewButton/ViewButton';
import Cover from './components/Cover/Cover';
import './App.css';
// import { Button } from 'bootstrap';

const initialState = {
  route: 'home',
  isViewCustomers: false,
  showDetails: false,
  customers: {
    id: '',
    name: '',
    email: '',
    balance: 0
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'home',
      isViewCustomers: false,
      showDetails: false,
      customers: {
        id: '',
        name: '',
        email: '',
        balance: 0
      }
    }
  }

  onButtonSubmit = () => {
    this.setState({route: 'customers', isViewCustomers: true})
  }

  onSelectCustomer = () => {
    this.setState({showDetails: true})
  }

  render() {
    const { route, isViewCustomers, showDetails } = this.state
    return (
      <div>
        <Navigation />
        <Cover />
        { route === 'home'
          ?
          <div>
            <ViewButton onButtonSubmit={this.onButtonSubmit}/>
          </div>
          : 
          <div>
            <Customers onSelectCustomer={this.onSelectCustomer} showDetails={showDetails} />
          </div>
        }
      </div>
    );
  }
}

export default App;
