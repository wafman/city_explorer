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
      query: '',
      location: ''
    }
  }


  handleSubmit = async query => {
    await this.setState({query});
    console.log(query);
    let url = `https://aqueous-springs-46846.herokuapp.com/location?data=${this.state.query}`;
    superagent.get(url)
      .then(res => {
        this.setState({location: res.body});
      });
  }

  render () {
    return (
      <React.Fragment>
        <Search handleSubmit={this.handleSubmit}  />
        <Map location={this.state.location} />
        <Search_Results location={this.state.location}/>
      </React.Fragment>
      
    );
  }
}

export default Main;