import React from 'react';
import superagent from 'superagent';
import Search from './search-form.js';
import Map from './map.js';
import Search_Results from './search-results';

localStorage['debug'] = 'fun';

class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  setLocation = (location) => {
    this.setState({
      search_query : location.search_query,
      formatted_query : location.formatted_query,
      latitude : location.latitude,
      longitude : location.longitude
    })
  }
  

  render () {
    return (
      <React.Fragment>
        <Search setLocation={this.setLocation}  />
        <Map longitude={this.state.longitude} latitude={this.state.latitude} />
        <Search_Results query={this.state.search_query}/>
      </React.Fragment>
      
    );
  }
}

export default Main;