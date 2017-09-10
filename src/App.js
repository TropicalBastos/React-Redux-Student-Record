import React, { Component } from 'react';
import './App.css';
import ScheduleContainer from './components/ScheduleContainer';
import configureStore from './store/store.js';
import {Provider} from 'react-redux';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ScheduleContainer/>
      </Provider>
    );
  }
}

export default App;
