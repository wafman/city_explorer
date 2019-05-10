import React from 'react';

localStorage['debug'] = 'search-form';

class Search extends React.Component{

  handleLocationInput = e => {
    e.preventDefault();
    let query = e.target.childNodes[0].value;
    this.props.handleSubmit(query);
  }

  render () {
    return (
      <form onSubmit={this.handleLocationInput}>
        <input></input>
        <input type="submit" value="Submit"></input>
      </form>
    );
  };

}

export default Search;