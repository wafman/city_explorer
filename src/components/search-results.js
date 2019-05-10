import React from 'react';

import Yelp from './results/yelp.js';
import Eventbrite from './results/eventbrite';
import Moviedb from './results/moviedb';
import Darksky from './results/darksky.js';

class Search_Results extends React.Component {


  render(){
    return (
      <>
        <section>
          <h3>Weather</h3><Darksky query={this.props.query}/>
          <h3>Yelp</h3><Yelp query={this.props.query}/>
          <h3>Events</h3><Eventbrite query={this.props.query}/>
          <h3>Movies</h3><Moviedb query={this.props.query}/>
        </section>
      </>
    );
  }
 
 
}

export default Search_Results;