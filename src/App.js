import React, {
  Component
} from 'react';
import Contacts from "./component/contact/Contacts";
import './App.css';
import Header from './component/layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Provider
// } from './context';
import AddContact from './component/contact/AddContact';
import EditContact from './component/contact/EditContact';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import About from './component/pages/About';
import NotFound from './component/pages/NotFound';
import Test from './component/test/Test';
import {
  Provider
} from 'react-redux';
import store from "./store";



class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Router>
          <div className="App">
            <header className="App-header">
              <Header className = "Contact Manager"/>
              <div className="container">
                <h4>
                  Welcome to the React Project of Michael Li
                </h4>
                <Switch>
                  <Route exact path = '/'
                  component = {Contacts} />
                  <Route exact path = '/contact/add'
                  component = {AddContact} />
                  <Route exact path = '/contact/edit/:id'
                  component = {EditContact} />
                  <Route exact path = '/about'
                  component = {About} />
                  <Route exact path = '/test' 
                  component = {Test} />
                  <Route component = {NotFound} />
                </Switch>
              </div>
            </header>
          </div>
        </Router>
    </Provider>
    );
  }
}

export default App;