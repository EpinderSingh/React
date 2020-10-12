import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component  {
  state = { images: [] }

  async onSearchSubmit(term){
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {query : term },
      headers: {
        Authorization: 'Client-ID kQ1gZWwhlIfwAb4suwMSjtC0M61zoYdLtsSYf2xOrkI'
      }
    });

    this.setState({ images: response.data.results });
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar runMeWhenUserSubmit={this.onSearchSubmit}/>
        Found: { this.state.images.length } images
      </div>
    );
  }
}

export default App;

// Access Key
// kQ1gZWwhlIfwAb4suwMSjtC0M61zoYdLtsSYf2xOrkI

// Secret Key
// gOv4MB2kFVFBkHK42HwME7kCo09Mgka3ALmqgeri3Pc