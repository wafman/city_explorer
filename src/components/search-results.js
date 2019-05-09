import React from 'react';

import Yelp from './results/yelp.js';
import Eventbrite from './results/eventbrite';
import Moviedb from './results/moviedb';
import Darksky from './results/darksky.js';

function Search_Results(props) {
  
    return (
      <>
        <section>
          <Darksky/>
          <Yelp />
          <Eventbrite />
          <Moviedb />
        </section>
      </>
    );
 
}

export default Search_Results;