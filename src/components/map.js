import React from 'react';
import superagent from 'superagent';
import Search from './search-form.js'

class Map extends React.Component {
  constructor(props) {
    super(props);


  }
 
  handleMap = (data) => {
    this.setState({latitde: this.data.latitde});
    this.setState({longitude: this.data.longitude})
    console.log(data.latitude, data.longitude);

  }

  render () {
    return (
     <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.latitde}%2c%20${this.longitude}&zoom=13&size=600x300&maptype=roadmap
     &key=${process.env.GEOCODE_API_KEY}`} alt="GOOGLE MAPS"></img>
    );
  }

}

export default Map;