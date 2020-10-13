import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';


class App extends React.Component  {
  state = { images: [] }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {query : term }
    });

    this.setState({ images: response.data.results });
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar runMeWhenUserSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

// Access Key
// kQ1gZWwhlIfwAb4suwMSjtC0M61zoYdLtsSYf2xOrkI

// Secret Key
// gOv4MB2kFVFBkHK42HwME7kCo09Mgka3ALmqgeri3Pc