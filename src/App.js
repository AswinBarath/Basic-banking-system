import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Customers from './components/Customers/Customers';
import ViewButton from './components/ViewButton/ViewButton';
import Cover from './components/Cover/Cover';
import './App.css';
// import { Button } from 'bootstrap';

const customers = [
  {
    name: 'aswin',
    email: 'aswin@gmail.com',
    balance: 10
  },
  {
    name: 'sriram',
    email: 'sriram@gmail.com',
    balance: 100
  }
];

const initialState = {
  route: 'home',
  isViewCustomers: false,
  showDetails: 'hide',
  customers: {
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
      showDetails: 'hide',
      customers: {
        name: '',
        email: '',
        balance: 0
      }
    }
  }

  // onButtonSubmit = () => {
  //   this.setState({ isViewCustomers: true })
  // }

  onSelectCustomer = (value) => {
    if (value === 'show') {
      this.setState({ showDetails: 'show' })
    } else {
      this.setState({ showDetails: 'hide' })
    }
  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({initialState})
    } else if (route === 'customers') {
      this.setState({isViewCustomers: true})
    }
    this.setState({route: route})
  }

  render() {
    const { route, isViewCustomers, showDetails } = this.state
    return (
      <div>
        <Navigation onRouteChange={this.onRouteChange} />
        <Cover />
        { route === 'home'
          ?
          <div>
            <ViewButton onRouteChange={this.onRouteChange} />
          </div>
          :
          <div>
            <Customers customers={customers} onSelectCustomer={this.onSelectCustomer} showDetails={showDetails} />
          </div>
        }
      </div>
    );
  }
}

export default App;
