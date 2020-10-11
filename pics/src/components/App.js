import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component  {
  onSearchSubmit(term){
    axios.get('https://api.unsplash.com/search/photos', {
      params: {query : term },
      headers: {
        Authorization: 'Client-ID kQ1gZWwhlIfwAb4suwMSjtC0M61zoYdLtsSYf2xOrkI'
      }
    })
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar runMeWhenUserSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;

// Access Key
// kQ1gZWwhlIfwAb4suwMSjtC0M61zoYdLtsSYf2xOrkI

// Secret Key
// gOv4MB2kFVFBkHK42HwME7kCo09Mgka3ALmqgeri3Pc