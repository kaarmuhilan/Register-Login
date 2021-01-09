import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import TableComponent from './table/table';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/table" component={TableComponent} />
      </div>
    );
  }
}

export default App;
