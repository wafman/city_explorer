import React from 'react';

import Search from './search-form.js';
import Map from './map.js';
import Search_Results from './search-results';

class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      location: {}
    }
  }


  render () {
    return (
      <React.Fragment>
        <Search />
        <Map />
        <Search_Results />
      </React.Fragment>
      
    );
  }
}

export default Main;