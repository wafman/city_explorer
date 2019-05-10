import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import './scss/core.scss';

class Main extends React.Component{
  render () {
    return <App />;
  }
}


ReactDOM.render(<App />, document.getElementById('root'));


