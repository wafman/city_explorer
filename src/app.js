import React from 'react';
import { realpathSync } from 'fs';

const Header = () => {
  return (
    <header>
      <h1>City Explorer</h1>
      <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
    </header>
  )
}

function Search(props) {
  return (
    <div>
      <input></input>
      <button>Search</button>
    </div>
  );
}

function Map(props) {
  return (
    <img src="https://maps.googleapis.com/maps/api/staticmap?center=47.606210%2c%20-122.332071&zoom=13&size=600x300&maptype=roadmap%20%20&key=AIzaSyBfOxvSAEhF0bINfqhSTthhNKEBb8eHfHc"></img>
  );
}

function Result(props) {
  return (
    <section styler="border: 1px solid black;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Consectetur purus ut faucibus pulvinar. Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Donec enim diam vulputate ut pharetra sit. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Mollis nunc sed id semper risus in. Viverra nam libero justo laoreet sit amet cursus. Dolor purus non enim praesent elementum. Viverra orci sagittis eu volutpat odio. Tellus orci ac auctor augue mauris augue neque gravida in. Netus et malesuada fames ac turpis egestas sed tempus. Nibh cras pulvinar mattis nunc sed blandit. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Dui id ornare arcu odio ut.</section>
  );
}

class Main extends React.Component {
  constructor(props){
    super(props);
  }


  render () {
    return (
      <React.Fragment>
        <Search />
        <Map />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </React.Fragment>
      
    );
  }
}


class App extends React.Component{
  render () {
    return (
      <React.Fragment>
        <Header />
        <Main />

      </React.Fragment>
    )
  }
}

export default App;