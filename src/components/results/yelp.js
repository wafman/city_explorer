import React from 'react';
import superagent from 'superagent';

class Yelp extends React.Component {

  getYelp = (props) => {
    let data = superagent.get(`https://city-explorer-backend.herokuapp.com/location`);
    
  };

  render () {
    return (
      <>
      <ul>Yelp</ul>
      </>
    );
  }
}

export default Yelp;