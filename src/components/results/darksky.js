import React from 'react';
import superagent from 'superagent';

class Darksky extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      weatherResult:[],
      renderResult: null
    }
  }

  weatherData = async e => {
    console.log(this.props.query);
    let url = `https://aqueous-springs-46846.herokuapp.com/weather`;
    let weather = await superagent.get(url).query({data:this.props.query});
    this.setState({weatherResult: weather.body});
    let renderResult = this.state.weatherResult.map( (ele,idx) => <li key={idx}> {ele.forecast + ' ' + ele.time }</li> );
    this.setState({renderResult})
  }

  componentDidUpdate(prevProps){
    if(this.props.query !== prevProps.query){
      this.weatherData();
    }
  }

  render () {
    return (
      <>
      <ul>{this.state.renderResult}</ul>
      </>
    );
  }
}

export default Darksky;