import React from 'react';

import Search from './search-form.js';
import Map from './map.js';
import Search_Results from './search-results';

localStorage['debug'] = 'fun';

class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search_query: '',
      formatted_query: '',
      latitude: null,
      longitude: null
    }
  }

  

  render () {
    return (
      <React.Fragment>
        <Search   />
        <Map />
        <Search_Results />
      </React.Fragment>
      
    );
  }
}

export default Main;