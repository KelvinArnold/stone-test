import React, { Component } from 'react';
// Import styles
import './../../assets/scss/app.scss';
// Import router
import { BrowserRouter } from 'react-router-dom';
import Routes from "./../../routes";
// Import Components
import { Header } from './../Header';
/**
 * App Component
 * @class
 * @returns {class} - return all app
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter
        basename="/">
        <div className="container-fluid">
          <div className="column">
            <Header/>
            <Routes/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
