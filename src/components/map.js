import React from 'react';
import superagent from 'superagent';
import Search from './search-form.js'

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
 

  render () {
    let src =`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`;
    return (
     <img src={src} alt="GOOGLE MAPS"></img>
    );
  }

}

export default Map;