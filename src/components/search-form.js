import React from 'react';
import superagent from 'superagent';

class Search extends React.Component{
  constructor(props){
    super(props)

    this.state = {};
  }

  handleChange = e => {
    let location = e.target.value;
    this.setState({location});
    console.log(location);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let url = `https://city-explorer-backend.herokuapp.com/location?data=${this.state.location}`;
    let data = await superagent.get(url);
    this.setState({databody: data.body});
    console.log(data);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        <input type="submit" value="Submit"></input>
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.databody}%2c%20${this.databody}&zoom=13&size=600x300&maptype=roadmap
      &key=${process.env.GEOCODE_API_KEY}`} alt="GOOGLE MAPS"></img>
      </form>
    );
  };

}

export default Search;