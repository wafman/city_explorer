import React from 'react';
import superagent from 'superagent';

class Eventbrite extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      eventResult:[],
      renderResult: null
    }
  }

  eventData = async e => {
    let url = `https://aqueous-springs-46846.herokuapp.com/events`;
    let events = await superagent.get(url).query({data:this.props.query});
    this.setState({eventResult: events.body});
    let renderResult = this.state.eventResult.map( (e,i) => <li key={i}> <a href={e.link}>{e.name}</a> <p>{e.event_date}</p> <p>{e.summary}</p></li> );
    this.setState({renderResult})
  }

  componentDidUpdate(prevProps){
    if(this.props.query !== prevProps.query){
      this.eventData();
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

export default Eventbrite;