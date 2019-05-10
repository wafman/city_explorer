import React from 'react';
import superagent from 'superagent';
localStorage['debug'] = 'search-form';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  handleChange = e => {
    let queryData = e.target.value;
    console.log(queryData);
    this.setState({queryData})
  }

  handleSubmit = async e => {
    e.preventDefault();
    let url = `https://aqueous-springs-46846.herokuapp.com/location`;
    let location = await superagent.get(url).query({data: this.state.queryData})
    this.props.setLocation(location.body);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}></input>
        <input type="submit" value="Submit"></input>
      </form>
    );
  };

}

export default Search;