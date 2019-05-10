import React from 'react';

import Yelp from './results/yelp.js';
import Eventbrite from './results/eventbrite';
import Moviedb from './results/moviedb';
import Darksky from './results/darksky.js';

function Search_Results(props) {
  
    return (
      <>
        <section>
          <Darksky location={this.state.location}/>
          <Yelp location={this.state.location}/>
          <Eventbrite location={this.state.location}/>
          <Moviedb location={this.state.location}/>
        </section>
      </>
    );
 
}

export default Search_Results;