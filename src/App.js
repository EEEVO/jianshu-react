import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// 引入semantic.min.css
import 'semantic-ui-css/semantic.min.css';

import Frame from './layout/frame/Frame.jsx';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Frame} />
      </BrowserRouter>
    );
  }
}

export default App;
